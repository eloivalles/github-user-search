import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIresponse, UserData, UserDetails } from '../core/entities';
import { Observable, of, merge } from 'rxjs';
import { retry, catchError, switchMap, concatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {

  url = 'https://api.github.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  searchUsers(q: string): Observable<UserData[]> {
    return this.http.get(this.url + `/search/users?q=${q}`).pipe(
      switchMap((res: APIresponse) => { return of(res.items)}),
      catchError(() => {return of(null)})
    ) as Observable<UserData[]>;
  }

  searchUsersAutocompleteOptions(q: string): Observable<string[]> {
    return this.http.get(this.url + `/search/users?q=${q}`).pipe(
      switchMap((res: APIresponse) => { return of(res.items.map(user => user.login))}),
      catchError(() => {return of(null)})
    ) as Observable<string[]>;
  }

  getUser(q: string): Observable<any> {
    const data: UserDetails = {
      user: null,
      repos: null,
      followers: null
    }
    return this.http.get(this.url + `/search/users?q=${q}`).pipe(
      switchMap((res: APIresponse) => { 
        data.user = res.items[0];
        return this.http.get(data.user.followers_url);
      }),
      switchMap((followers: any[]) => { 
        data.followers = followers;
        return this.http.get(data.user.repos_url);
      }),
      switchMap((repos: any[]) => { 
        data.repos = repos;
        return of(data);
      }),
      catchError(() => {return of(null)})
    ) as Observable<UserDetails>;
  }
}
