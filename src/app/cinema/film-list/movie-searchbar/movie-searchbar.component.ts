import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-searchbar',
  templateUrl: './movie-searchbar.component.html',
  styleUrl: './movie-searchbar.component.css'
})
export class MovieSearchbarComponent implements OnInit {
  searchForm: FormGroup;
  searchmode: string = "movies";

  constructor(private route: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {
    this.route.url.subscribe(url => {
      this.searchmode = url[0].path; //cambia il funzionamento della searchbar

      this.searchForm = new FormGroup({
        'movie': new FormControl(''),
        'filter': new FormControl(''),
        'date': new FormControl(this.searchmode==='movies'
          ? '2010-01-01'
          : new Date().toISOString().slice(0,10)
        ),
      });
    });
  }
  onSearch() {
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams:
          {
            'title': this.searchForm.getRawValue()['movie'],
            'filter': this.searchForm.getRawValue()['filter'],
            'date': this.searchForm.getRawValue()['date']
          },

      });
  }
}
