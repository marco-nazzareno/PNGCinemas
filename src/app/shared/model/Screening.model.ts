export class Screening {
  constructor(public id: number,
              public date: Date,
              public time: string,
              public seats: number,
              public theatre: string,
              public movie: string) {

  }
}
