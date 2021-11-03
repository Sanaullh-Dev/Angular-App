import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { OtherCom1Component } from './other-com1/other-com1.component';
declare var $: any;


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit, AfterViewInit {
  
  userName="Sana";
  @ViewChild('boox') tbox:ElementRef;
  @ViewChild(OtherCom1Component) otherCom1:OtherCom1Component;


  // Pipes Property
  pipepor = "this testing pipes Label";
  datePro = new Date();

  constructor(private renderer:Renderer2) { }

  @HostListener('click') muclick(){
    // alert("Host Listener Click");

  }
  @HostListener('window:scroll',['$event']) myScroll(){
    // console.log("HostListener Scroll");
    
  }

  ngOnInit() { 

    // $(window).scroll(function(){
    //   console.log('Windows scrolling');
      
    // })
  }

  ngAfterViewInit() {
    console.log("hello");    
    console.log(this.tbox);
    console.log("hello");
    // this.tbox.nativeElement.style.backgroundColor = "blue";
    // this.tbox.nativeElement.classList="bluebox";
    // this.tbox.nativeElement.innerHTML="this Modify HTML innerHTML";
    this.renderer.setStyle(this.tbox.nativeElement,'color','white');
    this.renderer.setStyle(this.tbox.nativeElement,'backgroundColor','red');
    this.renderer.addClass(this.tbox.nativeElement,"myclassAdd");
    this.renderer.setAttribute(this.tbox.nativeElement,'title','this is renderer Title showing');

   }

  childProperty(){
    
    console.log(this.otherCom1);
    this.otherCom1.name = "asdasd";
    console.log(this.otherCom1.main);
    
    this.otherCom1.main.nativeElement.style.background="red";

  }
  childMethod(){
    this.otherCom1.onAlter();

  }


  
}
