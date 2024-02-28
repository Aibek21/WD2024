import {Component, OnInit} from '@angular/core';
import {Post} from "../models";
import {ActivatedRoute} from "@angular/router";
import {POSTS} from "../fake-db";
import {of} from "rxjs";
import {PostsService} from "../posts.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService,
              private location: Location) {
    this.post = {} as Post;
    // this.post = POSTS.find((x) => x.id === id) as Post;
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'))
      this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
      })
    });
    // return POSTS.find((x) => x.id === id) as Post
  }

  goBack() {
    this.location.back();
  }
}
