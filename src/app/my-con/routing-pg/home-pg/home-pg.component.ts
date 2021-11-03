import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../Service/myservice.service';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.css']
})
export class HomePgComponent implements OnInit {

  constructor(private _Myservice:MyserviceService) {
    this._Myservice.userName.subscribe(na => this.name=na);
    this._Myservice.globalName.subscribe(na => this.globalName=na);
   }

  ngOnInit(): void {
  }
  globalName;
  status:boolean=false;
  name:string = "Sana";

  products = [
    {name:'Laptop'},
    {name:'Laptop1'},
    {name:'Laptop2'},
    {name:'Laptop3'},
  ]

}
