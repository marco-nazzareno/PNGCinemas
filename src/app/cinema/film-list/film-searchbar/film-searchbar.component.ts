import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-searchbar',
  templateUrl: './film-searchbar.component.html',
  styleUrl: './film-searchbar.component.css'
})
export class FilmSearchbarComponent implements OnInit {
  searchForm: FormGroup;
  searchmode: string = "films";

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.searchForm = new FormGroup({
      'filmName': new FormControl(''),
      'filmGenre': new FormControl(''),
      'filmDate': new FormControl(new Date().toISOString().slice(0,10)),
    });

    this.route.url.subscribe(url => {
      this.searchmode = url[0].path; //cambia il funzionamento della searchbar
    });
  }
  onSearch() {
    console.log(this.searchmode, this.searchForm.getRawValue());
  }
}
