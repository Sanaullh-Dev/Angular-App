import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  message1:string = ""
  message2:string = ""
  message3:string = ""
  

  onAddCart(){
    this.message1 = " Product added in your cart";
  }

  oninputclick(event){
    console.log(event.target.value);
    this.message1 = event.target.value;
  }
  onAddProduct(event){
    this.message2 = event.target.value + " added in carted";
  }

  getInputInfo(info){
    this.message3 = info.value;
  }
}

// Events 
// (focus) = "myMethod";
// (blur) = "myMethod";
// (scroll) = "myMethod";
// (cut) = "myMethod";
// (copy) = "myMethod";
// (paste) = "myMethod";
// (keydown) = "myMethod";
// (keypress) = "myMethod";
// (keyup) = "myMethod";
// and more....

