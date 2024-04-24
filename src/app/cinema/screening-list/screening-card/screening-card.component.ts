import {Component, Input, OnInit} from '@angular/core';
import {Screening} from "../../../shared/model/Screening.model";
import {Router} from "@angular/router";
import {Cinema} from "../../../shared/model/Cinema.model";
import {CinemaService} from "../../../shared/service/cinema.service";

@Component({
  selector: 'app-screening-card',
  templateUrl: './screening-card.component.html',
  styleUrl: './screening-card.component.css'
})
export class ScreeningCardComponent implements OnInit {
  @Input() screening: Screening;
  selectedCinema: Cinema;

  constructor(private cinemaService: CinemaService,
              private router: Router) {}

  ngOnInit() {
    this.selectedCinema = this.cinemaService.selectedCinema$.getValue();
  }
  onPurchaseTicket() {
    this.router.navigate(['/',this.selectedCinema.name,'tickets'],
      {
        queryParams:
          {
            'movie': this.screening.movieTitle,
            'date': this.screening.date,
            'time': this.screening.time,
            'theatre': this.screening.theatreName
          }
      });
  }
}
