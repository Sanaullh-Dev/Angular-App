import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mypro:string = "";
  products =[
    {proimg:'https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg', name:'laptop', id:'pro01',price:'1500'},
    {proimg:'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_960_720.jpg', name:'laptop', id:'pro01',price:'1600'},
    {proimg:'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg', name:'laptop', id:'pro01',price:'1700'},
    {proimg:'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg', name:'laptop', id:'pro01',price:'1800'},
    {proimg:'https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041__340.jpg', name:'laptop', id:'pro01',price:'1900'}
  ]

}
