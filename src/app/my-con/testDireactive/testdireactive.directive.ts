import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestdireactive]'
})
export class TestdireactiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
   }

   @HostBinding('style.backgroundColor') bgcolor='green';
   @HostBinding('class.myclass') myclass;

   changeBG(color:string){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
   }

   @HostListener('click') myHostClick(){
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor',"blue");
    this.bgcolor='red';
    this.myclass =true;
   }

   @HostListener('mouseover') myMoueOver(){
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor',"lightgray");
   }
  
   @HostListener('mouseout') myMoueOut(){
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor',"white");
   }

}
