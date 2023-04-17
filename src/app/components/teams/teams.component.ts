import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams:any =[];
  constructor() { }

  ngOnInit() {
    this.teams=[
      {id:1,Name:"ahmed",Stadium:"radess",Owner:"FCB",Foundation:1},
];
  
  }
}
