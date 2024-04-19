export class Movie {
  constructor(public id: number,
              public title: string,
              public relaseDate: Date,
              public director: string,
              public description: string,
              public genre: string,
              public length: number) {}
}
