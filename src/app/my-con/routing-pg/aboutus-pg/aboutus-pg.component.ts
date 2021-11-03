import { Component, OnInit } from '@angular/core';
import { add } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-aboutus-pg',
  templateUrl: './aboutus-pg.component.html',
  styleUrls: ['./aboutus-pg.component.css']
})
export class AboutusPgComponent implements OnInit {
  value:string = "This Test value";
  nameArr = [
    'Sanaulla Shaikh',
    'Attaulla Shaikh',
    'Sameer ',
    'Rafik ',
    'Shaeda Shaikh',
  ];
  productArr = [
    { sno: 1, name:'Mobile', price:'25,000.00',available:"Available"},
    { sno: 2, name:'Laptop', price:'60,000.00',available:"Not Available"},
    { sno: 3, name:'Tablet', price:'35,000.00',available:"Available"},
    { sno: 4, name:'WashingMachine', price:'15,000.00',available:"Available"},
    { sno: 5, name:'TV', price:'20,000.00',available:"Not Available"},
    { sno: 6, name:'Mobile-Apple', price:'1,35,000.00',available:"Available"},
    { sno: 7, name:'Samsung - Mobile', price:'50,000.00',available:"Not Available"},
  ];

  // for IMPURE PIPE
  productArr2 = [
    { sno: 1, name:'Mobile', price:'25,000.00',available:"Available"},
    { sno: 2, name:'Laptop', price:'60,000.00',available:"Not Available"},
    { sno: 3, name:'Tablet', price:'35,000.00',available:"Available"},
    { sno: 4, name:'WashingMachine', price:'15,000.00',available:"Available"},
    
  ];
  nameSerch:string="";
  
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(name)
  {
    this.productArr2.push({
      sno: 5, name:name.value, price:'4,000.00',available:"Not Available",
    });

  }
}
