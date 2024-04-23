import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TheatreService} from "../../shared/service/theatre.service";
import {Theatre} from "../../shared/model/Theatre.model";
import {take} from "rxjs";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;
  searchmode: string = "movies";
  theatres: Theatre[];

  constructor(private theatreService: TheatreService,
              private route: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {
    this.route.url.subscribe(url => {
      this.searchmode = url[0].path; //cambia la modalità di ricerca della searchbar
      this.searchForm = new FormGroup({
        'movie': new FormControl(''),
        'filter': new FormControl(''),
        'date': new FormControl(this.searchmode==='movies'
          ? '2010-01-01'
          : new Date().toISOString().slice(0,10)
        ),
      });
      this.route.queryParams //Quando i qparams cambiano (SOLO per la prima volta) popola il form.
        .pipe(take(1))
        .subscribe(qparams => {
        this.searchForm.patchValue({'movie': qparams.title}, );
      });
    });
    this.theatreService.theatres$
      .pipe(take(1))
      .subscribe(theatres => this.theatres = theatres);
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
        }
      );
  }
}
