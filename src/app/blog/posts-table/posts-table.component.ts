import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BlogPost } from 'src/app/BlogPost';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})

export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  constructor(private _pstSrvc : PostService, private router: Router) { }

  rowClicked(e : any, id : any) {
    this.router.navigate(['admin/post/', id]);
  }

  ngOnInit(): void {
    this._pstSrvc.getAllPosts().subscribe(data => {
      this.blogPosts = data;
    });
  }

}
