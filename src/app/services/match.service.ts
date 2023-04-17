import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //@ de serveur backend
  matchURL: string="http://localhost:8090/api/matches";
  constructor( private http:HttpClient) { }
  //fih el obj
  addMatch(objet){
    //post(@fin machi,obj) une methode http ou action HTTTP ou (francias) verbeHTTP yaferha le protocol hhtps
    //return se7i7 ena ba3dhet requet ema nehb tarj3li reponse 
   return this.http.post(this.matchURL,objet);
  }
  getAllMatches(){
    //el get ta5o ken el @ met3 el BackEnd  menin bech yejib
    return this.http.get(this.matchURL);
  }
  getMatchById(id){
    return this.http.get(`${this.matchURL}/${id}`);
  }
  
  deletMatchById(id){
    return this.http.delete(`${this.matchURL}/${id}`);
  }
  //
   editMatch(objet){
//deja el objet fih id 
    return this.http.put(this.matchURL,objet);
   }
}
