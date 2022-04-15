import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {
  posts : Array<BlogPost> = [];
  constructor(private _pstSrvc : PostService) { }

  ngOnInit(): void {
    this._pstSrvc.getPosts(1, "", "").subscribe(data => {
      if (data.length > 0) {
        this.posts = data.slice(0, 3);
      }
    });
  }

}
