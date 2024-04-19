import {Component, ElementRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent {
  constructor(private elRef: ElementRef,
              private router:Router) {}
  onCloseDetail() {
    this.router.navigate(['/films']);
  }
}
