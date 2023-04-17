import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
   matches:any=[];
   match:{};
   //Router un module qui assure la navigation entre les components partie ts
  constructor(private router:Router, private matchService:MatchService) { }
//de que le component lancee
  ngOnInit() {
    //BD
   // this.matches=JSON.parse(localStorage.getItem("matches"))
   this.matchService.getAllMatches().subscribe(
    //fontion anonyeme Arrow function et en meme temps c'est un attribut  de la fonction subscribe
    (data)=>{
      this.matches=data;
    }
   );
  }
 deletMatch(id:number){
    /*for (let i = 0; i < this.matches.length; i++) {
   if(this.matches[i].id==x){
    //nafs5 mel position
    this.matches.splice(i,1);
    //bech yo9s w you5rj 5ater id unique
    break;
   }
    
  }
  //pour refercher localstorage
  localStorage.setItem("matches",JSON.stringify(this.matches));*/
  console.log("here object",this.match);
  this.matchService.deletMatchById(id).subscribe((response) => {
    this.matchService.getAllMatches().subscribe(
      //fontion anonyeme Arrow function et en meme temps c'est un attribut  de la fonction subscribe
      (response)=>{
        this.matches=response;
      }
     );
  }
 );

 }
 goToEdit(x:number){
  this.router.navigate([`editMatch/${x}`]);

  
 }
 goToDisplay(x:number){
  //na3tih el shema win machi
    // this.router.navigate(["match-info/"+x]);
    this.router.navigate([`matchInfo/${x}`]);
  
   }

 }

