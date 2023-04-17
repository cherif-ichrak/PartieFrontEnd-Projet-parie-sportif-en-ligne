import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL : string="http://localhost:8090/api/players"

  constructor(private http:HttpClient) { }
  addPlayer(objet){
    //post(@fin machi,obj) une methode http ou action HTTTP ou (francias) verbeHTTP yaferha le protocol hhtps
    //return se7i7 ena ba3dhet requet ema nehb tarj3li reponse 
   return this.http.post(this.playerURL,objet);
  }
  getAllPlayers(){
    //el get ta5o ken el @ met3 el BackEnd  menin bech yejib
    return this.http.get(this.playerURL);
  }
  getPlayerById(id){
    return this.http.get(`${this.playerURL}/${id}`);
  }
  
  deletPlayerById(id){
    return this.http.delete(`${this.playerURL}/${id}`);
  }
  //
   editPlayer(objet){
//deja el objet fih id 
    return this.http.put(this.playerURL,objet);
   }
}

