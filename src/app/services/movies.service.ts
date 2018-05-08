import { Popular } from './../shared/interfaces';
import { Upcoming } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {

    private apiURL = environment.apiUrl;

    private upComingURL = environment.upcomingUrl;

    constructor(
        private http: HttpClient) { }

    getPopularMovies(): Observable<Popular[]> {
        return this.http.get(this.apiURL)
            .map(response =>
                <Popular[]>response
            );
    }

    getUpcomingMovies(): Observable<Upcoming[]>{
        return this.http.get(this.upComingURL)
            .map(response=>
                <Upcoming[]>response
            );
    }
}