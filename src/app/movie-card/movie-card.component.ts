import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Movie} from "../shared/model/Movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie: Movie;

  constructor(private router:Router) {}

  onSelect() {
    this.router.navigate(['/movies','detail',this.movie.id]);
  }
}
