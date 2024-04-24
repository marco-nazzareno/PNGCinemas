import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../../shared/service/http.service";
import {Movie} from "../../../shared/model/Movie.model";
import {MovieService} from "../../../shared/service/movie.service";
import {Subscription, take} from "rxjs";
import {CinemaService} from "../../../shared/service/cinema.service";
import {Cinema} from "../../../shared/model/Cinema.model";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  loggedIn: boolean;
  selectedMovie: Movie;
  imgPath: string;
  selectedCinema: Cinema;
  movieSub: Subscription;
  constructor(private cinemaService: CinemaService,
              private movieService: MovieService,
              private authService: AuthService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.authService.loggedUser.subscribe(value => this.loggedIn = value);
    this.cinemaService.selectedCinema$.subscribe(cinema => this.selectedCinema = cinema);

    this.route.params.subscribe(params => {
      this.movieSub = this.movieService.movies$.subscribe((movies: Movie[]) => {
        this.selectedMovie = movies?.find(el => el.id === +params.id);
        this.imgPath = `url(/assets/img/Movie${this.selectedMovie.id}.jpg)`;
      });
    });
  }
  onCloseDetail() {
    this.router.navigate(['/movies']);
  }
  onFurtherInfo() {
    this.router.navigate(['/',this.selectedCinema.name,'screenings'],
      {
        queryParams:
          {
            'movie': this.selectedMovie.title,
            'filter': '',
            'date': ''
          }
      });
  }
}
