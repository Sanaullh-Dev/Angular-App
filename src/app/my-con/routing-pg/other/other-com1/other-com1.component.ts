import { Component, OnInit, ViewChild, ElementRef, ContentChild, AfterContentInit, Renderer2 } from '@angular/core';
import { TestdireactiveDirective } from 'src/app/my-con/testdireactive/testdireactive.directive';

@Component({
  selector: 'app-other-com1',
  templateUrl: './other-com1.component.html',
  styleUrls: ['./other-com1.component.css']
})
export class OtherCom1Component implements OnInit,AfterContentInit {
  name:string="Sana";
  @ViewChild('main') main:ElementRef;
  @ContentChild('childCon') childPar:ElementRef;
  @ViewChild(TestdireactiveDirective) myDir:TestdireactiveDirective;


  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  ChangeColor(color){
    this.myDir.changeBG(color);
  }
  
  onAlter(){
    alert(this.name);
    var text=this.renderer.createText('this add from crete text');
    this.renderer.appendChild(this.childPar.nativeElement,text);
  }
  ngAfterContentInit(){
    this.renderer.setStyle(this.childPar.nativeElement,'color','red');
  }

}
