import {Component, Input, OnInit} from '@angular/core';
import {Screening} from "../../../shared/model/Screening.model";
import {Router} from "@angular/router";
import {Cinema} from "../../../shared/model/Cinema.model";
import {CinemaService} from "../../../shared/service/cinema.service";
import { MovieService } from '../../../shared/service/movie.service';
import { Movie } from '../../../shared/model/Movie.model';

@Component({
  selector: 'app-screening-card',
  templateUrl: './screening-card.component.html',
  styleUrl: './screening-card.component.css'
})
export class ScreeningCardComponent implements OnInit {
  @Input() screening: Screening;
  imgPath: string;
  selectedCinema: Cinema;

  constructor(private movieService: MovieService,
              private cinemaService: CinemaService,
              private router: Router) {}

  ngOnInit() {
    this.selectedCinema = this.cinemaService.selectedCinema$.getValue();
    this.imgPath = `url(/assets/img/Movie${this.screening.movieId}.jpg)`;
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
