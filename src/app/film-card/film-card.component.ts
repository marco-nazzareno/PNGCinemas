import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() film;

  constructor(private router:Router) {}

  onSelect() {
    this.router.navigate(['/films','detail','Spiderman 3']);
  }
}
