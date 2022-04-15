const perPage = 6;
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }

  getPosts(page : number, tag : string, category : string) : Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>("https://apiassignment4.herokuapp.com/api/posts?page=" + page + "&perPage=" + perPage + "&category=" + category + "&tag=" + tag).pipe(catchError(err => {
      return throwError(err);
    }))
  }

  getPostbyId(id : string): Observable<BlogPost> {
    return this.httpClient.get<BlogPost>("https://apiassignment4.herokuapp.com/api/posts/" + id).pipe(catchError(err => {
      return throwError(err);
    }))
  }

  getCategories(): Observable<any> {
    return this.httpClient.get("https://apiassignment4.herokuapp.com/api/categories").pipe(catchError(err => {
      return throwError(err);
    }))
  }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>("https://apiassignment4.herokuapp.com/api/tags").pipe(catchError(err => {
      return throwError(err);
    }))
  }

  getAllPosts():Observable<BlogPost[]> {
    return this.httpClient.get<BlogPost[]>("https://apiassignment4.herokuapp.com/api/posts?page=1&perPage=" + Number.MAX_SAFE_INTEGER).pipe(catchError(err => {
      return throwError(err);
    }))
  }

  newPost(data: BlogPost): Observable<any> {
    return this.httpClient.post<any>(`https://apiassignment4.herokuapp.com/api/posts`, data).pipe(catchError(err => {
      return throwError(err);
    }));
  }
  
  updatePostById(id: string, data: BlogPost): Observable<any> {
    return this.httpClient.put<any>(`https://apiassignment4.herokuapp.com/api/posts/${id}`, data).pipe(catchError(err => {
      return throwError(err);
    }));
  }

  deletePostById(id: string): Observable<any> {
    return this.httpClient.delete<any>(`https://apiassignment4.herokuapp.com/api/posts/${id}`).pipe(catchError(err => {
      return throwError(err);
    }));;
  }
}

