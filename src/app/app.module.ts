import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from "./shared/directive/dropdown.directive";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Routes} from "@angular/router";
import { CarouselComponent } from './home/carousel/carousel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { LatestRelasesComponent } from './home/latest-relases/latest-relases.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './cinema/film-list/movie-list.component';
import { SearchbarComponent } from './cinema/searchbar/searchbar.component';
import { ScreeningListComponent } from './cinema/screening-list/screening-list.component';
import { ScreeningCardComponent } from './cinema/screening-list/screening-card/screening-card.component';
import { AuthComponent } from './auth/auth.component';
import {RoutingGuardService} from "./shared/service/guard/routing-guard.service";
import {AuthGuardService} from "./shared/service/guard/auth-guard.service";
import { TheatersListComponent } from './cinema/theaters-list/theaters-list.component';
import { CinemaComponent } from './cinema/cinema.component';
import { MovieDetailComponent } from './cinema/film-list/movie-detail/movie-detail.component';
import {TicketsComponent} from "./cinema/tickets/tickets.component";
import { TicketFormComponent } from './cinema/tickets/ticket-form/ticket-form.component';
import { SeatPickerComponent } from './cinema/tickets/seat-picker/seat-picker.component';
import {HttpClientModule} from "@angular/common/http";
import { TicketCardComponent } from './auth/ticket-card/ticket-card.component';
 const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'auth', component: AuthComponent},
   {path: 'home', component: HomeComponent},
   {path: 'movies', component: MovieListComponent, children:
     [
       {path: 'detail/:id', component: MovieDetailComponent}
     ]
   },
   {path: 'tickets', component: HomeComponent, canActivate: [RoutingGuardService]},
   {path: ':cinemaName', component: CinemaComponent, children:
     [
       {path: 'screenings', component: ScreeningListComponent},
       {path: 'theaters', component: TheatersListComponent},
       {path: 'tickets', component: TicketsComponent, canActivate: [AuthGuardService]}
     ]
   }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    CarouselComponent,
    HomeComponent,
    LatestRelasesComponent,
    MovieCardComponent,
    MovieListComponent,
    SearchbarComponent,
    ScreeningListComponent,
    ScreeningCardComponent,
    AuthComponent,
    TheatersListComponent,
    CinemaComponent,
    MovieDetailComponent,
    TicketsComponent,
    TicketFormComponent,
    SeatPickerComponent,
    TicketCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
