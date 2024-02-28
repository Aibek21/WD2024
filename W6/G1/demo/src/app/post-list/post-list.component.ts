import {Component, OnInit} from '@angular/core';
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {of} from "rxjs";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.posts = []
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
