import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['products']);

   }

  ngOnInit(): void {
  }
  users = [];

  onCreateUser(uname){
    this.users.push({
      name:uname.value
    }); 

    if(this.users.length>3){
      // alert("More then three added");


    }

  }


  onRemoveUser(){
    this.users.splice(this.users.length -1)
  }

  onRemoveUser1(unserNo){
    this.users.splice(unserNo,1);
  }

}
