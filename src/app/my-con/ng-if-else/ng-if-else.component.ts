import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVaild:boolean = false;

  onclick(){
    this.isVaild = !this.isVaild;
  }

}
