import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScreeningService} from "../../shared/service/screening.service";
import {Screening} from "../../shared/model/Screening.model";
import {Subscription} from "rxjs";
import {Movie} from "../../shared/model/Movie.model";
import {MovieService} from "../../shared/service/movie.service";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../shared/service/http.service";
import {CinemaService} from "../../shared/service/cinema.service";

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrl: './screening-list.component.css'
})
export class ScreeningListComponent implements OnInit, OnDestroy {
  screenings: Screening[];
  screeningSub: Subscription;
  constructor(private httpService: HttpService,
              private cinemaService: CinemaService,
              private screeningService: ScreeningService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(qparams => {
      this.httpService.getScreeningsByCinemaIdAndDate(
        this.cinemaService.selectedCinema$.getValue().name,
        qparams.date || new Date().toISOString().slice(0,10)
      );

      this.screeningSub = this.screeningService.screenings$.subscribe(screenings => {
        this.screenings = this.screeningService.filterScreenings(screenings, qparams);
      });
    });
  }
  ngOnDestroy() {
    this.screeningSub?.unsubscribe();
  }
}
