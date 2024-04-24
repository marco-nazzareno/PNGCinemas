import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/service/http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getLatestMovies();
  }
}
