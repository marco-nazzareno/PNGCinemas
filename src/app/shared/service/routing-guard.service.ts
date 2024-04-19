import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";

@Injectable({providedIn: "root"})
export class RoutingGuardService implements CanActivate {
  constructor(private httpService: HttpService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.httpService.selectedCinema.pipe(
      take(1),
      map(cinemaName => {
          if(cinemaName)
            return this.router.createUrlTree(['/',cinemaName, route.url[0].path]);
          else
            return false;
        }
      )
    );
  }
}
