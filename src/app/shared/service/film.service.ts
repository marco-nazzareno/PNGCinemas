import {Injectable} from "@angular/core";
import {Movie} from "../model/Movie.model";
import {BehaviorSubject} from "rxjs";
import {Params} from "@angular/router";

@Injectable({providedIn:'root'})
export class FilmService {
  films$= new BehaviorSubject([
    new Movie(0, 'Spiderman 3', new Date('2017-03-15'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte terza.','Action, Supereroi',192),
    new Movie(1, 'Spiderman 4', new Date('2018-07-19'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quarta.','Action, Supereroi',158),
    new Movie(2, 'Spiderman 5', new Date('2019-01-05'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte quinta.','Action, Supereroi',175),
    new Movie(3, 'Spiderman 6', new Date('2020-09-22'),'Sam Raimi','Le mitiche avventure dell\'ommo oragno parte sesta.','Action, Supereroi',134),
  ]);

  filterMovies(list: Movie[], filters: {[key: string]: string}): Movie[] {
    let filtered = [...list];

    if(filters.title)
      filtered = filtered.filter(el => el.title.toLowerCase().includes(filters.title.toLowerCase()));
    if(filters.genre)
      filtered = filtered.filter(el => el.genre.toLowerCase().includes(filters.genre.toLowerCase()));
    if(filters.date)
      filtered = filtered.filter(el => el.relaseDate.getTime() >= new Date(filters.date).getTime());

    return filtered;
  }
}
