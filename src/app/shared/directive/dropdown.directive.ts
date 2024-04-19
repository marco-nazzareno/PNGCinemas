import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostListener('window:click', ['$event']) toggleDropdown(event: Event) {
    if(this.elRef.nativeElement.contains(event.target)) {
      this.elRef.nativeElement.firstElementChild.classList.add('active');
      this.elRef.nativeElement.lastElementChild.classList.add('show');
    }
    else {
      this.elRef.nativeElement.lastElementChild.classList.remove('show');
      this.elRef.nativeElement.firstElementChild.classList.remove('active');
    }
  }
  constructor(private elRef: ElementRef) {}
}
