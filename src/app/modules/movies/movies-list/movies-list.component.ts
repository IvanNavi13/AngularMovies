import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDbService } from '../../../services/movies-db.service';
import { MovieData } from '../../../models/movie-data.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  currentId!: string; 
  movies : MovieData[] = [];

  constructor(public activeRouter: ActivatedRoute, public moviesDb: MoviesDbService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe( params => {
      if(JSON.stringify(params) == '{}'){ //Validar si no tiene parametros
        this.getTrending();
      }else{
        this.currentId = params['id'];
        this.getMovies();
      }
    });
  }

  getTrending(){
    this.moviesDb.getTrending().
    subscribe((response:any) => {
      this.movies = <MovieData[]>response['results'];
    })
  }



}
