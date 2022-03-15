import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './posts';
import { IUser } from './users';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private http : HttpClient) { }
  urluser:string="https://jsonplaceholder.typicode.com/users";
  urlpost:string="https://jsonplaceholder.typicode.com/posts";

  getUsersDetails():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.urluser)
  }

  getPosts():Observable<IPost[]> {
    return this.http.get<IPost[]>(this.urlpost);
  }

}
