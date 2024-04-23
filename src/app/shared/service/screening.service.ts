import {Injectable} from "@angular/core";
import {BehaviorSubject, take} from "rxjs";
import {Screening} from "../model/Screening.model";
import {MovieService} from "./movie.service";

@Injectable({providedIn:'root'})
export class ScreeningService {
  screenings$ = new BehaviorSubject<Screening[]>([
    new Screening(1, new Date('2024-04-23'), '16:00:00', 50,'1','Spiderman 3'),
    new Screening(2, new Date('2024-04-23'), '19:00:00', 50,'1','Spiderman 4'),
    new Screening(2, new Date('2024-04-23'), '22:00:00', 50,'1','Spiderman 5'),
    new Screening(1, new Date('2024-04-23'), '16:00:00', 60,'3D','Spiderman 3'),
    new Screening(2, new Date('2024-04-23'), '19:00:00', 60,'3D','Spiderman 4'),
    new Screening(2, new Date('2024-04-23'), '22:00:00', 60,'3D','Spiderman 5'),
    new Screening(1, new Date('2024-04-23'), '16:00:00', 40,'ATMOS','Spiderman 3'),
    new Screening(2, new Date('2024-04-23'), '19:00:00', 40,'ATMOS','Spiderman 4'),
    new Screening(2, new Date('2024-04-23'), '22:00:00', 40,'ATMOS','Spiderman 6'),
  ]);

  filterScreenings(screenings: Screening[], filters: {[key: string]: string}): Screening[] {
    const filtered = screenings.filter(screening => {
      return (filters.title
          ? screening.movie.toLowerCase().includes(filters.title.toLowerCase())
          : true
        ) && (filters.filter
          ? screening.theatre.toLowerCase().includes(filters.filter.toLowerCase())
          : true
        ) && (filters.date
          ? screening.date.getDate() >= new Date(filters.date).getDate() &&
            screening.date.getDate() < new Date(filters.date).getDate()+1
          : screening.date.getDate() >= new Date().getDate() &&
            screening.date.getDate() < new Date().getDate()+1
      )
    });
    return filtered;
  }
}
