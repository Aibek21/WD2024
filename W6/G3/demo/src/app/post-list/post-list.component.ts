import {Component, OnInit} from '@angular/core';
import {POSTS} from '../fake-db';
import {Post} from "../models";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  newPost: Post;
  loaded: boolean;

  constructor(private postsService: PostsService) {
    this.posts = [];
    this.newPost = {} as Post;
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getPosts()
  }


  getPosts() {
    this.loaded = false;
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    })
  }


  addPost() {
    this.postsService.addPost(this.newPost).subscribe((post) => {
      this.newPost.id = post.id;
      this.posts.unshift(this.newPost);
      this.newPost = {} as Post;
    })
  }
}
