import { MatchService } from './../../services/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-match-edit',
  templateUrl: './match-edit.component.html',
  styleUrls: ['./match-edit.component.css']
})
export class MatchEditComponent implements OnInit {
 match :any={};
 matchTab:any;
 id:any;

  constructor(private activatedRoute : ActivatedRoute,private router:Router, private matchService:MatchService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
  this.matchService.getMatchById(this.id).subscribe((response)=>{
    this.match=response;
  })

      
      
  }
  editMatch(){
    this.matchService.editMatch(this.match).subscribe((response)=>{
      console.log("here response",response);
    })
    this.router.navigate(["admin"]);

   

}
}
