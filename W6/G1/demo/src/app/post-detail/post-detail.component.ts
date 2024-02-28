import {Component, OnInit} from '@angular/core';
import {Post} from "../models";
import {ActivatedRoute} from "@angular/router";
import {POSTS} from "../fake-db";
import {of} from "rxjs";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) {
    this.loaded = false;
  }

  ngOnInit() {
      this.getPost();
  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      const id = +this.route.snapshot.params['id'];
      this.loaded = false;
      this.postsService.getPost(id).subscribe((post) => {
        this.post = post;
        this.loaded = true;
      });
    })
  }

}
