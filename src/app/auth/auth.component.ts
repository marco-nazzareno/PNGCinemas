import { Component, OnInit } from '@angular/core';
import { Ticket } from '../shared/model/Ticket.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private httpService) {}

  ngOnInit() {
    this.httpService.getBookedTickets.subscribe((response: Ticket[]) => this.tickets = response);
  }
}
