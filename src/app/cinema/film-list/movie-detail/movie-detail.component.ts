import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../../shared/service/http.service";
import {Movie} from "../../../shared/model/Movie.model";
import {MovieService} from "../../../shared/service/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  selectedFilm: Movie;
  selectedCinema: string;
  filmSub: Subscription;
  constructor(private http: HttpService,
              private filmService: MovieService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.selectedCinema.subscribe(cinema => this.selectedCinema = cinema);
    this.route.params.subscribe(params => {
      this.filmSub = this.filmService.movies$.subscribe((films: Movie[]) => {
        this.selectedFilm = films.find(el => el.id === +params.id);
      });
    });
  }
  onCloseDetail() {
    this.router.navigate(['/films']);
  }
  onFurtherInfo() {
    this.router.navigate(['/',this.selectedCinema,'screenings'],
      {
        queryParams:
          {
            'title': this.selectedFilm.title,
            'genre': '',
            'date': ''
          }
      });
  }
}
