import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Theatre} from "../model/Theatre.model";

@Injectable({providedIn:'root'})
export class TheatreService {
  theatres$ = new BehaviorSubject<Theatre[]>(null);
}
