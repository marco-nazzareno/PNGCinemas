export class Ticket {
    constructor(public id: number,
                public seat: string,
                public price: number,
                public theatreName: string,
                public movieTitle: string,
                public cinemaName: string,
                public date: string,
                public time: string) {}
}