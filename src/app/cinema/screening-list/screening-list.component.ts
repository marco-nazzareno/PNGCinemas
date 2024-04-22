import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScreeningService} from "../../shared/service/screening.service";
import {Screening} from "../../shared/model/Screening.model";
import {Subscription} from "rxjs";
import {Movie} from "../../shared/model/Movie.model";
import {MovieService} from "../../shared/service/movie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrl: './screening-list.component.css'
})
export class ScreeningListComponent implements OnInit, OnDestroy {
  screenings: Screening[];
  screeningSub: Subscription;
  constructor(private screeningService: ScreeningService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.screeningSub = this.screeningService.screenings$.subscribe(screenings => {
        this.screenings = this.screeningService.filterScreenings(screenings, params);
      });
    });
  }
  ngOnDestroy() {
    this.screeningSub.unsubscribe();
  }
}
