import {Injectable} from "@angular/core";
import {BehaviorSubject, take} from "rxjs";
import {Screening} from "../model/Screening.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn:'root'})
export class ScreeningService {
  screenings$ = new BehaviorSubject<Screening[]>(null);

  filterScreenings(screenings: Screening[], filters: {[key: string]: string}): Screening[] {
    return screenings?.filter(screening => {
      return (filters.movie
          ? screening.movieTitle.toLowerCase().includes(filters.movie.toLowerCase())
          : true
        ) && (filters.filter
          ? screening.theatreName.toLowerCase().includes(filters.filter.toLowerCase())
          : true
        ) && (filters.date
          ? new Date(screening.date).getDate() >= new Date(filters.date).getDate() &&
            new Date(screening.date).getDate() < new Date(filters.date).getDate()+1
          : new Date(screening.date).getDate() >= new Date().getDate() &&
            new Date(screening.date).getDate() < new Date().getDate()+1
      )
    });
  }
  findScreening(screenings: Screening[], filters: {[key: string]: string}): Screening {
    return screenings.find(screening => {
      return (
        screening.movieTitle.toLowerCase() === filters.movie.toLowerCase() &&
        screening.date === filters.date &&
        screening.date === filters.date &&
        screening.time === filters.time &&
        screening.theatreName === filters.theatre
      )
    });
  }
}
