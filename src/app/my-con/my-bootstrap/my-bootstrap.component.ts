import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bootstrap',
  templateUrl: './my-bootstrap.component.html',
  styleUrls: ['./my-bootstrap.component.css']
})
export class MyBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isCollapsed = false;

}
