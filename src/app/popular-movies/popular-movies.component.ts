import { map } from 'rxjs/operators';
import { MovieService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movieData = [];

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {
    this.getPopularMoviesList();
  }

  getPopularMoviesList() {
    this.movieService.getPopularMovies()
        .subscribe((data: any) => {
          this.movieData = data.results.map(movieData => movieData);
          console.log(this.movieData);
        }, error => {
          console.error('Error retrieving  Data');
          return Observable.throw(error);
      });
}

}
