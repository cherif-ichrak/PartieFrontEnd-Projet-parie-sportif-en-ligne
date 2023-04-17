import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams:any=[];
  constructor(private router:Router, private teamService:TeamService) { }
    ngOnInit() {
     this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data;
      }
     );
    }
  deletTeam(x:number){
   /*  for (let i = 0; i < this.teams.length; i++) {
   if(this.teams[i].id==x){
    this.teams.splice(i,1);
    break;
   }
  }
  localStorage.setItem("teams",JSON.stringify(this.teams)); */
  console.log("here object",this.teams);
  this.teamService.deletTeamById(x).subscribe((response) => {
    this.teamService.getAllTeams().subscribe(
      (response)=>{
        this.teams=response;
      }
     );
  }
 );
 }
 goToDisplay(x:number){
     this.router.navigate([`teamInfo/${x}`])
 }
 goToEdit(x:number){
  this.router.navigate([`editTeam/${x}`]);
 }
}
