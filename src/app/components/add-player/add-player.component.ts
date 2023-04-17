import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

   //Form ID
   playerForm: FormGroup;
   player:any={};

   constructor(private playerService:PlayerService ) { }
 
   ngOnInit() {
    
   }
   addPlayer(){
    console.log("here object",this.player);
    this.playerService.addPlayer(this.player).subscribe((response) => {
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
