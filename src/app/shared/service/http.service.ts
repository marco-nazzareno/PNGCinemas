import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService {
  selectedCinema = new BehaviorSubject<string>('Sibari');
}
