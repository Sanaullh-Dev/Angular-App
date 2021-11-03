import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bypro-child',
  templateUrl: './bypro-child.component.html',
  styleUrls: ['./bypro-child.component.css']
})
export class ByproChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productck:boolean;
  @Input() itemName:string;
  @Output() addedPro = new EventEmitter<any>();

  onAddcart(){
    this.addedPro.emit(this.itemName);
  }

}
