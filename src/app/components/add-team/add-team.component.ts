import { TeamService } from 'src/app/services/team.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  //il faut declaree l'id de formulaire de addteam
  TeamForm: FormGroup;
   //objet team
   team:any={};
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }
 //methode  declarer
 addTeam(){
  console.log("here object",this.team);
  this.teamService.addTeam(this.team).subscribe((response) => {
     console.log("here response",response);
   }
  );
}
maxId(T:any){
let max;
if(T.length==0){
  max=0;
}else
{
  max=T[0].id;
   for (let i = 1; i < T.length; i++) {
      if(T[i].id>max){
         max=T[i].id;
      }      
    }
}return max;
}
}

