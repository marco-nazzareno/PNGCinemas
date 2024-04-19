import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  loggedUser = new BehaviorSubject<boolean>(true);
}
