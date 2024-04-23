import {Component, Input} from '@angular/core';
import {Theatre} from "../../../shared/model/Theatre.model";

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrl: './seat-picker.component.css'
})
export class SeatPickerComponent {
  @Input() theatre: Theatre;
}
