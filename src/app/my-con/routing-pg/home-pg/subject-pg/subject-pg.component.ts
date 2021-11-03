import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from 'src/app/my-con/Service/myservice.service';

@Component({
  selector: 'app-subject-pg',
  templateUrl: './subject-pg.component.html',
  styleUrls: ['./subject-pg.component.css']
})
export class SubjectPgComponent implements OnInit {

  constructor(private _Myservice:MyserviceService) { 
    this._Myservice.userName.subscribe(na => this.name=na);
    this._Myservice.globalName.subscribe(na => this.globalName=na);

  }

  ngOnInit(): void {
  }

  globalName;

  name:string="Sana";
  @Input() bkcolor:string;

  onUpdate(name){
    // this.name = name.value;
    this._Myservice.userName.next(name.value);
    this._Myservice.globalName.next(name.value);

  }

}
