import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
id:any;
//tableau des matches bech nejib eli tab mel LS
matchTab:any;
//objet bech n7ot fih el objet eli le9ito
match:any;
//nasne3o instance bech nejib el id men route active 

  constructor( private activatedRoute:ActivatedRoute ,private matchService:MatchService) { }
 //de que le component est lanceer nehb nejib el path w nalwej b paramMap "el id " etape 1 : recuperer l'id f path
  ngOnInit() {
   
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe((response) => {
      console.log("here object from be",response)
       this.match=response;
     }
    );

   /* this.matchTab=JSON.parse(localStorage.getItem("matches") || "[]" )  
    for (let i = 0; i < this.matchTab.length; i++) {
      if(this.matchTab[i].id==this.id){
        this.match=this.matchTab[i];
        break; 
      }*/
      
        
    }  
  }


