import { Component } from '@angular/core';
import {Theatre} from "../../shared/model/Theatre.model";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  theatre: Theatre = null;
}
