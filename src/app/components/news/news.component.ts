import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  T:any =[];
  constructor() { }

  ngOnInit() {
    this.T=[
    {id:1,author:"mohmed",title:"title 1",date:"05/11/2022",img:"assets/images/img_1.jpg"},
    {id:2,author:"ichrak",title:"title 2",date:"05/11/2022",img:"assets/images/img_1.jpg"},
    {id:3,author:"eya",title:"title 3",date:"05/11/2022",img:"assets/images/img_1.jpg"},
    {id:4,author:"aymen",title:"title 4",date:"05/11/2022",img:"assets/images/img_1.jpg"}];
  }

}
