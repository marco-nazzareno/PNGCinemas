import { Component, Input } from '@angular/core';
import { Ticket } from '../../shared/model/Ticket.model';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css'
})
export class TicketCardComponent {
  @Input() ticket: Ticket;
}
