import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ApiEndpoints } from '../utils/api.endpoints';
import { Constants } from '../utils/constants.class';

@Injectable({
  providedIn: 'root'
})
export class MoviesDbService {

  constructor(public http: HttpClient) { }


  getGenres(): Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.GENRE_LIST);
  }
  
  getTrending():Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.TRENDING);
  }

  getMoviesByGenre(id: number):Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.getMoviesByGenre(id));
  }
  
  getMovieImage(path: string):Observable<Object>{
    return this.http.get(environment.MOVIES_URL + ApiEndpoints.getImage(path));
  }

  addMovie(id: number, key: string){
    let myListArray = JSON.parse(localStorage.getItem(key) ?? '[]');  //parse -> convierte un string a objeto
    if(myListArray.indexOf(id) == -1){
      myListArray.push(id);
      localStorage.setItem(key, JSON.stringify(myListArray)); //stringify -> convierte un objeto a String
    }
  }

  addMovieToList(id:number){
    this.addMovie(id, Constants.MY_LIST);
  }

  addMovieToFavorites(id:number){
    this.addMovie(id, Constants.MY_FAVORITES);
  }
  
  removeMovie(id: number, key: string){
    let myListArray = JSON.parse(localStorage.getItem(key) ?? '[]');  //parse -> convierte un string a objeto
    if(myListArray.indexOf(id) == -1){
      myListArray.push(id);
      localStorage.setItem(key, JSON.stringify(myListArray)); //stringify -> convierte un objeto a String
    }
  }

  removeMovieToList(id:number){
    this.removeMovie(id, Constants.MY_LIST);
  }

  removeMovieToFavorites(id:number){
    this.removeMovie(id, Constants.MY_FAVORITES);
  }


 

}
