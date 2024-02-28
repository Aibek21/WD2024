import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from './models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number) {
    return this.httpClient.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  addPost(post: Post) {
    return this.httpClient.post<Post>(`${this.BASE_URL}/posts`, post);
  }
}
