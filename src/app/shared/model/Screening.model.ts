export class Screening {
  constructor(public id: number,
              public date: string,
              public time: string,
              public seats: number,
              public seatsMapping: string,
              public theatreName: string,
              public movieTitle: string) {

  }
}
