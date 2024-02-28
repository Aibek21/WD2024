import {Component, OnInit} from '@angular/core';
import {POSTS} from '../fake-db';
import {Post} from "../models";
import {of} from "rxjs";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  newPost: Post;

  constructor(private postsService: PostsService) {
    this.posts = [];
    this.newPost = new Post()

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  addPost() {
    // this.newPost.id = this.posts.length + 1;

    this.postsService.addPost(this.newPost).subscribe((post) => {
      this.newPost.id = post.id;
      this.posts.unshift(this.newPost);
      this.newPost = new Post();
    })
  }

}
