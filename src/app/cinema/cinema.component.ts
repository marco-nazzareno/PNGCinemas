import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/service/http.service";
import {Router} from "@angular/router";
import {CinemaService} from "../shared/service/cinema.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit {

  constructor(private cinemaService: CinemaService,
              private router: Router) {}
  ngOnInit() {
    this.cinemaService.selectedCinema$.subscribe(cinema => {
      if(!cinema)
        this.router.navigate(['/']);
    });
  }
}
