import {Injectable} from "@angular/core";
import {Movie} from "../model/Movie.model";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn:'root'})
export class MovieService {
  movies$= new BehaviorSubject([
    new Movie(1, 'Spiderman 3', new Date('2017-03-15'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte terza.','Action, Supereroi',192),
    new Movie(2, 'Spiderman 4', new Date('2018-07-19'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quarta.','Action, Supereroi',158),
    new Movie(3, 'Spiderman 5', new Date('2019-01-05'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quinta.','Action, Supereroi',175),
    new Movie(4, 'Spiderman 6', new Date('2020-09-22'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte sesta.','Action, Supereroi',134),
  ]);

  filterMovies(movies: Movie[], filters: {[key: string]: string}): Movie[] {
    const filtered = movies.filter(movie => //Se il filtro non è presente, lo ignoro.
      (filters.title
        ? movie.title.toLowerCase().includes(filters.title.toLowerCase())
        : true
      ) && (filters.genre
        ? movie.genre.toLowerCase().includes(filters.genre.toLowerCase())
        : true
      ) && (filters.date
        ? movie.relaseDate >= new Date(filters.date)
        : movie.relaseDate >= new Date('2010-01-01')
      )
    );

    return filtered;
  }
}
