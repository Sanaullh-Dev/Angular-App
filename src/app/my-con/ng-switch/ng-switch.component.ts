import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct:string;

  getProduct(va){
    console.log(va.target.value);
    this.selectProduct = va.target.value;
  }
}
