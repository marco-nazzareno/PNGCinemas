import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Cinema} from "../model/Cinema.model";

@Injectable({providedIn:'root'})
export class CinemaService {
  cinemas$ = new BehaviorSubject<Cinema[]>(null);
  selectedCinema$ = new BehaviorSubject<Cinema>(null);
}
