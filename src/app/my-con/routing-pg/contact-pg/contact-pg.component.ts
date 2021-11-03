import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../Service/myservice.service';

@Component({
  selector: 'app-contact-pg',
  templateUrl: './contact-pg.component.html',
  styleUrls: ['./contact-pg.component.css']
})
export class ContactPgComponent implements OnInit {

  constructor(private _messageservice:MyserviceService) { }
  product={};
  productList=[];

  ngOnInit(): void {
    this.product=this._messageservice.product.name;
    // this.productList=this._messageservice.productList;
    this._messageservice.productList().subscribe(li => this.productList=li);
    
  }
  

  onclick(){
    this._messageservice.messageAlter();  
  }
}
