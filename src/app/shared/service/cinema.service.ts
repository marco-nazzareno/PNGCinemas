import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Cinema} from "../model/Cinema.model";

@Injectable({providedIn:'root'})
export class CinemaService {
  cinemas$ = new BehaviorSubject<Cinema[]>([
    new Cinema(1, 'Torino', 'Torino Lingotto'),
    new Cinema(2, 'Moncalieri', 'Stazione centrale'),
    new Cinema(3, 'Sibari', 'Altrove'),
  ]);
  selectedCinema$ = new BehaviorSubject<Cinema>(new Cinema(1, 'Torino', 'Torino Lingotto'));
}
