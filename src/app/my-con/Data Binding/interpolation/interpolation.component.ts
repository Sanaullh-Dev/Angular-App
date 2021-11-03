import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = "Sanaulla";
  myMethod(){
    return "My New Method is " + this.name;
  }
  appStatus:boolean = false;
}
