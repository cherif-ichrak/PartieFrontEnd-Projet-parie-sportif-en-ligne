import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  players:any=[];
  player:{};
 constructor(private router:Router, private playerService:PlayerService) { }
   ngOnInit() {
         this.playerService.getAllPlayers().subscribe(
     (data)=>{
       this.players=data;
     }
    );
   }
 deletPlayer(x:number){
  /*  for (let i = 0; i < this.players.length; i++) {
  if(this.players[i].id==x){
   this.players.splice(i,1);
   break;
  }
   
 }
 localStorage.setItem("players",JSON.stringify(this.players)); */
 console.log("here object",this.player);
 this.playerService.deletPlayerById(x).subscribe((response) => {
   this.playerService.getAllPlayers().subscribe(
     (response)=>{
       this.players=response;
     }
    );
 }
);
}
goToEdit(x:number){
 this.router.navigate([`editPlayer/${x}`]);

 
}
goToDisplay(x:number){
   this.router.navigate([`playerInfo/${x}`]);
 
  }

}


