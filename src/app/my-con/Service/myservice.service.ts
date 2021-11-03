import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient:HttpClient) { }
  product={
    name:"Laptop",id:"001"
  };

  // productList=[
  //   {name:"Laptop",id:"001"},
  //   {name:"Mobile",id:"002"},
  //   {name:"TV",id:"003"},
  //   {name:"Tab",id:"004"},
  // ];
  userName= new Subject<any>();
  globalName = new BehaviorSubject('Sana');
  


  url='https://jsonplaceholder.typicode.com/users';

  productList(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  messageAlter(){
    alert("Thank for Subscribed ")
  }
}
