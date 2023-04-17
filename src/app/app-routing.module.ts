import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { MatchEditComponent } from './components/match-edit/match-edit.component';

import { TeamsComponent } from './components/teams/teams.component';
import { TemasInfoComponent } from './components/temas-info/temas-info.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';

import { SignupComponent } from './components/signup/signup.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
   //http:localhost:4200/home
   { path:"",component:HomeComponent},


   //http:localhost:4200/signin
  { path:"signin",component:LoginComponent},

   //http:localhost:4200/subsciption
  { path:"subsciption",component:SignupComponent},

  //http:localhost:4200/ajoutermatch
   {path:"addMatch",component:AddMatchComponent},
  
   //http:localhost:4200/ajouterteam
    {path:"addTeam",component:AddTeamComponent},
    //http:localhost:4200/ajouterplayer
    {path:"addPlayer",component:AddPlayerComponent},
    {path:"matches",component: MatchesComponent},
    {path:"teams",component: TeamsComponent},

    {path:"admin",component:AdminComponent},
    {path:"editMatch/:id",component:MatchEditComponent},
    {path:"editTeam/:id",component:EditTeamComponent},
    {path:"matchInfo/:id",component:MatchInfoComponent},
    {path:"playerInfo/:id",component:PlayerInfoComponent},

    {path:"editPlayer/:id",component:EditPlayerComponent},

    {path:"teams-info",component:TemasInfoComponent},
    { path: "profile", component: ProfileComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
