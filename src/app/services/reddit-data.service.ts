import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditDataService {

  constructor(private http: HttpClient) { }

  getPosts(after: string = ''): Observable<any> {

    let params = new HttpParams()
      .set('sort', 'top')
      .set('limit', 25)
      .set('count', 25);

    if (after) {
      params = params.set('after', after);
    }

    return this.http.get(`https://www.reddit.com/r/aww/new.json`, { params: params })
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
