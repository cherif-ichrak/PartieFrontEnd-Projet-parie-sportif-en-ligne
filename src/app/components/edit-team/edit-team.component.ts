import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  team: any = {};
  teamForm: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private teamService: TeamService) { }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe((response) => {
      this.team = response;
    })
  }
  editTeam() {
    this.teamService.editTeam(this.team).subscribe((response) => {
      console.log("here response", response);
    })
    this.router.navigate(["admin"]);
  }
}

