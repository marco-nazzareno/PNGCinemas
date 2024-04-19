import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/service/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit {

  constructor(private http: HttpService,
              private router: Router) {}
  ngOnInit() {
    this.http.selectedCinema.subscribe(cinema => {
      if(!cinema)
        this.router.navigate(['/']);
    });
  }
}
