import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "../auth.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.authService.loggedUser.pipe(
      take(1),
      map(user => {
        console.log(user)
          if(user)
            return true;
          else
            return this.router.createUrlTree(['/auth']);
        }
      )
    );
  }
}
