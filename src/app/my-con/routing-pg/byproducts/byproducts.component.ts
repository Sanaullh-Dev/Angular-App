import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byproducts',
  templateUrl: './byproducts.component.html',
  styleUrls: ['./byproducts.component.css']
})
export class ByproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:boolean = false;
  itemNa:string;
  addedPro:any;

  onSelect(name){
    this.product = true;
   this.itemNa = name;
  }
  onadded(item){
    this.addedPro = item;
  }

  
}
