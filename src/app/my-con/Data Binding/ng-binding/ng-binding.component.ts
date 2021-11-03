import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-binding',
  templateUrl: './ng-binding.component.html',
  styleUrls: ['./ng-binding.component.css']
})
export class NgBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mypro:boolean= false;
  mystyle:string = "15px";
  mtClass={
    class1:true,
    class2:false,
    class3:true

  }

  multiStyle ={
    'background' : 'red',
    'border':'10px solid green'
  }
}
