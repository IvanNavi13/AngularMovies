import { Component, OnInit } from '@angular/core';
import { MoviesDbService } from '../../../services/movies-db.service';
import { MovieCategory } from '../../../models/movie-category.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  genres: MovieCategory[] = [];

  constructor(public movieDb: MoviesDbService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(){
    this.movieDb.getGenres()
    .subscribe((response:any) => {
      this.genres = <MovieCategory[]>response['genres']
    })
  }

}
