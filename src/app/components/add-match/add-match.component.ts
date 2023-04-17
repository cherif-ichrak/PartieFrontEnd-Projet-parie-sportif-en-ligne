import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //id de formulaire
  matchForm: FormGroup;

  //objet match
  match:any={};
  //etpae one 
  constructor( private matchService:  MatchService) { }

  ngOnInit() {
  }
  //methode declarer
  addMatch(){
   console.log("here object",this.match);
   this.matchService.addMatch(this.match).subscribe((response) => {
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
