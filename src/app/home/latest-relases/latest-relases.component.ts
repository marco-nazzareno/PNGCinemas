import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../shared/service/movie.service";
import {Movie} from "../../shared/model/Movie.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-latest-relases',
  templateUrl: './latest-relases.component.html',
  styleUrl: './latest-relases.component.css'
})
export class LatestRelasesComponent implements OnInit, OnDestroy {
  movies: Movie[];
  movieSub: Subscription;

  constructor(private filmService: MovieService) {}

  ngOnInit() {
    this.movieSub = this.filmService.movies$.subscribe(films => {
      this.movies = films;
    });
  }
  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
