import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Cinema} from "../model/Cinema.model";
import {HttpClient} from "@angular/common/http";
import {CinemaService} from "./cinema.service";
import {MovieService} from "./movie.service";
import {ScreeningService} from "./screening.service";
import {TheatreService} from "./theatre.service";
import {Movie} from "../model/Movie.model";
import {Theatre} from "../model/Theatre.model";
import {Screening} from "../model/Screening.model";
import { Ticket } from "../model/Ticket.model";

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient,
              private cinemaService: CinemaService,
              private movieService: MovieService ,
              private screeningService: ScreeningService,
              private theatreService: TheatreService,) {}

  getCinemas() {
    this.http.get<Cinema[]>(`http://localhost:8080/pngcinema/cinema`)
      .subscribe(response => this.cinemaService.cinemas$.next(response));
  }
  getTheatresByCinemaName(cinemaName: string) {
    this.http.get<Theatre[]>(`http://localhost:8080/pngcinema/cinema/${cinemaName}/theatresbycinemaname`)
      .subscribe(response => this.theatreService.theatres$.next(response));
  }
  getLatestMovies() {
    this.http.get<Movie[]>(`http://localhost:8080/pngcinema/lastmovies`)
      .subscribe(response => this.movieService.movies$.next(response));
  }
  getMoviesByDate(relaseDate: string) {
    this.http.get<Movie[]>(`http://localhost:8080/pngcinema/movies/${relaseDate}`)
      .subscribe(response => this.movieService.movies$.next(response));
  }
  getScreeningsByCinemaIdAndDate(cinemaId: number, date: string) {
    this.http.get<Screening[]>(`http://localhost:8080/pngcinema/cinema/${cinemaId}/screeningsbydate/${date}`)
      .subscribe(response => this.screeningService.screenings$.next(response));
  }
  putTicket(screeningId: number, ticketId: number){
    this.http.put(`http://localhost:8080/pngcinema/screenings/${screeningId}/preordertickets/${ticketId}`, {})
      .subscribe(() => console.log('Biglietto Prenotato'));
  }
  getBookedTickets() {
    return this.http.get<Ticket[]>(`http://localhost:8080/pngcinema/bookedtickets`);
  }
}
