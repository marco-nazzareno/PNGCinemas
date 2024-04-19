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
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './cinema/film-list/film-list.component';
import { FilmSearchbarComponent } from './cinema/film-list/film-searchbar/film-searchbar.component';
import { ScreeningListComponent } from './cinema/screening-list/screening-list.component';
import { ScreeningCardComponent } from './cinema/screening-card/screening-card.component';
import { AuthComponent } from './auth/auth.component';
import {RoutingGuardService} from "./shared/service/routing-guard.service";
import {AuthGuardService} from "./shared/service/auth-guard.service";
import { TheatersListComponent } from './cinema/theaters-list/theaters-list.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FilmDetailComponent } from './cinema/film-list/film-detail/film-detail.component';
 const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'auth', component: AuthComponent},
   {path: 'home', component: HomeComponent},
   {path: 'films', component: FilmListComponent, children:
     [
       {path: 'detail/:filmName', component: FilmDetailComponent}
     ]
   },
   {path: 'tickets', component: HomeComponent, canActivate: [RoutingGuardService]},
   {path: ':cinemaName', component: CinemaComponent, children:
     [
       {path: 'screenings', component: ScreeningListComponent},
       {path: 'theaters', component: TheatersListComponent},
       {path: 'tickets', component: FilmListComponent, canActivate: [AuthGuardService]}
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
    FilmCardComponent,
    FilmListComponent,
    FilmSearchbarComponent,
    ScreeningListComponent,
    ScreeningCardComponent,
    AuthComponent,
    TheatersListComponent,
    CinemaComponent,
    FilmDetailComponent
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
