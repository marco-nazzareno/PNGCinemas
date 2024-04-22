import {Component, Input} from '@angular/core';
import {Screening} from "../../../shared/model/Screening.model";

@Component({
  selector: 'app-screening-card',
  templateUrl: './screening-card.component.html',
  styleUrl: './screening-card.component.css'
})
export class ScreeningCardComponent {
  @Input() screening: Screening;
}
