import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpService} from "../http.service";
import {CinemaService} from "../cinema.service";

@Injectable({providedIn: "root"})
export class RoutingGuardService implements CanActivate {
  constructor(private cinemaService: CinemaService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.cinemaService.selectedCinema$.pipe(
      take(1),
      map(cinema => {
          if(cinema)
            return this.router.createUrlTree(['/',cinema.name, route.url[0].path]);
          else
            return false;
        }
      )
    );
  }
}
