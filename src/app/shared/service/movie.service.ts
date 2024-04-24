import {Injectable} from "@angular/core";
import {Movie} from "../model/Movie.model";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn:'root'})
export class MovieService {
  movies$= new BehaviorSubject<Movie[]>(null);

  filterMovies(movies: Movie[], filters: {[key: string]: string}): Movie[] {
    return movies?.filter(movie => //Se il filtro non è presente, lo ignoro.
      (filters.movie
        ? movie.title.toLowerCase().includes(filters.movie.toLowerCase())
        : true
      ) && (filters.filter
        ? movie.genre.toLowerCase().includes(filters.filter.toLowerCase())
        : true
      ) 
    );
  }
}
