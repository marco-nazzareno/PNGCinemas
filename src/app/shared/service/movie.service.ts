import {Injectable} from "@angular/core";
import {Movie} from "../model/Movie.model";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn:'root'})
export class MovieService {
  movies$= new BehaviorSubject<Movie[]>([
    new Movie(1, 'Spiderman 3', '2017-03-15','Sam Raimi','Le mitiche avventure dell\'ommo oragno parte terza.','Action, Supereroi',192),
    new Movie(2, 'Spiderman 4', '2018-07-19','Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quarta.','Action, Supereroi',158),
    new Movie(3, 'Spiderman 5', '2019-01-05','Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quinta.','Action, Supereroi',175),
    new Movie(4, 'Spiderman 6', '2020-09-22','Sam Raimi','Le mitiche avventure dell\'ommo oragno parte sesta.','Action, Supereroi',134),
  ]);

  filterMovies(movies: Movie[], filters: {[key: string]: string}): Movie[] {
    return movies.filter(movie => //Se il filtro non è presente, lo ignoro.
      (filters.movie
        ? movie.title.toLowerCase().includes(filters.movie.toLowerCase())
        : true
      ) && (filters.filter
        ? movie.genre.toLowerCase().includes(filters.filter.toLowerCase())
        : true
      ) && (filters.date
        ? new Date(movie.relaseDate) >= new Date(filters.date)
        : new Date(movie.relaseDate) >= new Date('2010-01-01')
      )
    );
  }
}
