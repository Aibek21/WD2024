import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {POSTS} from "./fake-db";
import {Post} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/posts`)
    // return of(POSTS);
  }

  getPost(id: number) {
    return this.httpClient.get<Post>(`${this.BASE_URL}/posts/${id}`)
    // return of(POSTS.find((x) => x.id === id) as Post);
  }
}
