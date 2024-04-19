import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../shared/service/http.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  collapsed = false;
  selectedCinema: string = null;

  constructor(private httpService: HttpService,
              private router: Router) {}

  ngOnInit() {
    this.httpService.selectedCinema.subscribe(cinemaName => {
      this.selectedCinema = cinemaName;
    });
  }
  onSetCinema(name: string) {
    this.httpService.selectedCinema.next(name);
  }
}
