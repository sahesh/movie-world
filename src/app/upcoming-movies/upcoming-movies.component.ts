import { Component, OnInit } from '@angular/core';
import { MovieService } from './../services/movies.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  movieData = [];

  constructor(
    private movieService: MovieService) { }

  ngOnInit() {
    this.getUpcomingMoviesList();
  }

  getUpcomingMoviesList() {
    this.movieService.getUpcomingMovies()
        .subscribe((data: any) => {
          this.movieData = data.results.map(movieData => movieData);
          console.log(this.movieData);
        }, error => {
          console.error('Error retrieving  Data');
          return Observable.throw(error);
      });
  }


}
