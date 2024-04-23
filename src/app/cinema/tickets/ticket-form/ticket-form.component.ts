import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription, take} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Theatre} from "../../../shared/model/Theatre.model";
import {Screening} from "../../../shared/model/Screening.model";
import {ScreeningService} from "../../../shared/service/screening.service";
import {TheatreService} from "../../../shared/service/theatre.service";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit, OnDestroy {
  ticketForm: FormGroup;
  theatres: Theatre[];
  screenings: Screening[];
  screeningSub: Subscription;

  constructor(private screeningService: ScreeningService,
              private theatreService: TheatreService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.theatreService.theatres$.pipe(take(1)).subscribe(theatres => this.theatres = theatres);
    this.screeningSub = this.screeningService.screenings$.subscribe(screenings => this.screenings = screenings);

    this.ticketForm = new FormGroup({
      'movie': new FormControl('', [Validators.required]),
      'date': new FormControl(new Date().toISOString().slice(0,10), [Validators.required]),
      'time': new FormControl('', [Validators.required]),
      'theatre': new FormControl('', [Validators.required])
    });

    this.route.queryParams
      .pipe(take(1))
      .subscribe(qparams => {
        if((qparams.date)) {
          this.ticketForm.patchValue({
            'movie': qparams.movie,
            'date': qparams.date,
            'time': qparams.time,
            'theatre': qparams.theatre
          });
        }
      });
  }
  ngOnDestroy() {
    this.screeningSub.unsubscribe();
  }

  onSearch() {
    if(this.ticketForm.valid) {
      this.router.navigate([],
        {
          relativeTo: this.route,
          queryParams:
            {
              'movie': this.ticketForm.getRawValue()['movie'],
              'date': this.ticketForm.getRawValue()['date'],
              'time': this.ticketForm.getRawValue()['time'],
              'theatre': this.ticketForm.getRawValue()['theatre'],
            },
        }
      );
    }
  }
}
