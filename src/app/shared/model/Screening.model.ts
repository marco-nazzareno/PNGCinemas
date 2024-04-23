export class Screening {
  constructor(public id: number,
              public date: string,
              public time: string,
              public seats: number,
              public seatsMapping: string,
              public theatre: string,
              public movie: string) {

  }
}
