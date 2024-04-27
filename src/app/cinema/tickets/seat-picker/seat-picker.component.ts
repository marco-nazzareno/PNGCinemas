import {Component, Input} from '@angular/core';
import {Theatre} from "../../../shared/model/Theatre.model";
import {Screening} from "../../../shared/model/Screening.model";
import {HttpService} from "../../../shared/service/http.service";
import {Router} from "@angular/router";
import {CinemaService} from "../../../shared/service/cinema.service";

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrl: './seat-picker.component.css'
})
export class SeatPickerComponent {
  @Input() theatre: Theatre;
  @Input() screening: Screening;
  selectedPosition: number;

  constructor(private httpService: HttpService) {}

  onSelectSeat(position: number) {
    if(!this.isOccupied(position)) {
      this.selectedPosition = position;
    }
  }
  onConfirm() {
    this.httpService.putTicket(this.screening.id, this.selectedPosition+1);
  }
  isOccupied(position: number) {
    if(this.screening.seatsMapping.charAt(position)==='1')
      return true;
    else
      return false;
  }
}
