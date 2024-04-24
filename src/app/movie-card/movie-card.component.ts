import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Movie} from "../shared/model/Movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  imgPath: string;

  constructor(private router:Router) {}

  ngOnInit() {
    this.imgPath = `url(/assets/img/Movie${this.movie.id}.jpg)`;
  }
  onSelect() {
    this.router.navigate(['/movies','detail',this.movie.id]);
  }
}
