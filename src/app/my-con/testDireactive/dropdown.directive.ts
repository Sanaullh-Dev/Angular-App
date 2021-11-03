import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.active') classActive;
  @HostListener('click') myclick(){
    this.classActive=!this.classActive;
  }
  

}
