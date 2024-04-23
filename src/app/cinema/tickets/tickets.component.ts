import {Component, OnInit} from '@angular/core';
import {Theatre} from "../../shared/model/Theatre.model";
import {ScreeningService} from "../../shared/service/screening.service";
import {ActivatedRoute} from "@angular/router";
import {Screening} from "../../shared/model/Screening.model";
import {take} from "rxjs";
import {TheatreService} from "../../shared/service/theatre.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {
  screeningToBook: Screening;
  screeningTheatre: Theatre;

  constructor(private screeningService: ScreeningService,
              private theatreService: TheatreService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(qparams => {
      if(qparams.movie) {
        this.screeningService.screenings$.pipe(take(1)).subscribe(screenings => {
          this.screeningToBook = this.screeningService.findScreening(screenings, qparams);
          this.screeningTheatre = this.theatreService.theatres$.getValue().find(theatre => {
            return theatre.name === this.screeningToBook?.theatre;
          });
        });
      }
    });
  }
}
