import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit {
  //toujour declarer les variables globales avant le constructor
  @Input() newInput:any;
  constructor() { }
  
  ngOnInit() {
  }

}
