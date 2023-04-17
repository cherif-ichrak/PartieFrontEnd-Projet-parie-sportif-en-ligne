import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any =[];
  constructor() { }

  ngOnInit() {
    this.matches=[
      {id:1,scoreOne:2,scoreTwo:2,teamOne:"FCB",teamTwo:"RMD"},
      {id:2,scoreOne:1,scoreTwo:2,teamOne:"CA",teamTwo:"css"},
      {id:3,scoreOne:6,scoreTwo:3,teamOne:"EST",teamTwo:"etoile"},
      {id:4,scoreOne:0,scoreTwo:4,teamOne:"SEV",teamTwo:"aaaa"}];
  
  }
  }


