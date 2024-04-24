import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../shared/service/http.service";
import {CinemaService} from "../shared/service/cinema.service";
import {Cinema} from "../shared/model/Cinema.model";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  collapsed = false;
  selectedCinema: Cinema = null;
  cinemas: Cinema[] = null;
  slcinemaSub: Subscription;

  constructor(private httpService: HttpService,
              private cinemaService: CinemaService) {}

  ngOnInit() {
    this.cinemaService.cinemas$.pipe(take(2)).subscribe(cinemas => {
      this.cinemas = cinemas;
    });
    this.slcinemaSub = this.cinemaService.selectedCinema$.subscribe(cinema => {
      this.selectedCinema = cinema;
    });
  }
  ngOnDestroy() {
    this.slcinemaSub.unsubscribe();
  }

  onSetCinema(cinema: Cinema) {
    this.cinemaService.selectedCinema$.next(cinema);
    this.httpService.getTheatresByCinemaName(cinema.name);
  }
}
