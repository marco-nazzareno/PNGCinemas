import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmService} from "../../shared/service/film.service";
import {Subscription} from "rxjs";
import {Movie} from '../../shared/model/Movie.model';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit, OnDestroy {
  movieSub: Subscription;
  movies: Movie[];
  constructor(private filmService: FilmService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieSub = this.filmService.films$.subscribe(movies => {
        this.movies = this.filmService.filterMovies(movies, params);
      });
    });
  }
  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
