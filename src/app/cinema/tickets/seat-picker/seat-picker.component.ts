import {Component, Input} from '@angular/core';
import {Theatre} from "../../../shared/model/Theatre.model";
import {Screening} from "../../../shared/model/Screening.model";

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrl: './seat-picker.component.css'
})
export class SeatPickerComponent {
  @Input() theatre: Theatre;
  @Input() screening: Screening;
  selectedPosition: number;

  onSelectSeat(position: number) {
    if(!this.isOccupied(position)) {
      this.selectedPosition = position;
    }
  }
  isOccupied(position: number) {
    if(this.screening.seatsMapping.charAt(position)==='1')
      return true;
    else
      return false;
  }
}
