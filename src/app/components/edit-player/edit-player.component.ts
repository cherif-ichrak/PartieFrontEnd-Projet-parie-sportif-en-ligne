import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player: any = {};
  playerForm: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute , private router: Router, private playerService:PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe((response) => {
      this.player = response;
    })



  }
  edit() {
    this.playerService.editPlayer(this.player).subscribe((response) => {
      console.log("here response", response);
    })
    this.router.navigate(["admin"]);



  }
}




