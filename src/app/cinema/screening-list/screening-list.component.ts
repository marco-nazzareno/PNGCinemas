import { Component } from '@angular/core';

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrl: './screening-list.component.css'
})
export class ScreeningListComponent {
  pages: Date[] = [];
  pageIndex: number;

  constructor() {
    for(let i=0; i<7; i++) {
      const date = new Date();
      date.setDate(date.getDate() +i);
      this.pages[i] = date;
    }
    this.pageIndex = 0;
  }

  setPageIndex(increment: number) {
    this.pageIndex = this.pageIndex + +increment;
    console.log(this.pageIndex)
  }
}
