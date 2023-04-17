import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL : string="http://localhost:8090/api/teams"

  constructor(private http:HttpClient) { }
  addTeam(objet){
    //post(@fin machi,obj) une methode http ou action HTTTP ou (francias) verbeHTTP yaferha le protocol hhtps
    //return se7i7 ena ba3dhet requet ema nehb tarj3li reponse 
   return this.http.post(this.teamURL,objet);
  }
  getAllTeams(){
    //el get ta5o ken el @ met3 el BackEnd  menin bech yejib
    return this.http.get(this.teamURL);
  }
  getTeamById(id){
    return this.http.get(`${this.teamURL}/${id}`);
  }
  
  deletTeamById(id){
    return this.http.delete(`${this.teamURL}/${id}`);
  }
  //
   editTeam(objet){
//deja el objet fih id 
    return this.http.put(this.teamURL,objet);
   }
}

