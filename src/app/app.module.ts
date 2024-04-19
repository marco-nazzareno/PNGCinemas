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
import { MovieSearchbarComponent } from './cinema/film-list/movie-searchbar/movie-searchbar.component';
import { ScreeningListComponent } from './cinema/screening-list/screening-list.component';
import { ScreeningCardComponent } from './cinema/screening-card/screening-card.component';
import { AuthComponent } from './auth/auth.component';
import {RoutingGuardService} from "./shared/service/routing-guard.service";
import {AuthGuardService} from "./shared/service/auth-guard.service";
import { TheatersListComponent } from './cinema/theaters-list/theaters-list.component';
import { CinemaComponent } from './cinema/cinema.component';
import { MovieDetailComponent } from './cinema/film-list/movie-detail/movie-detail.component';
 const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'auth', component: AuthComponent},
   {path: 'home', component: HomeComponent},
   {path: 'films', component: MovieListComponent, children:
     [
       {path: 'detail/:id', component: MovieDetailComponent}
     ]
   },
   {path: 'tickets', component: HomeComponent, canActivate: [RoutingGuardService]},
   {path: ':cinemaName', component: CinemaComponent, children:
     [
       {path: 'screenings', component: ScreeningListComponent},
       {path: 'theaters', component: TheatersListComponent},
       {path: 'tickets', component: MovieListComponent, canActivate: [AuthGuardService]}
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
    MovieSearchbarComponent,
    ScreeningListComponent,
    ScreeningCardComponent,
    AuthComponent,
    TheatersListComponent,
    CinemaComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,

    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
