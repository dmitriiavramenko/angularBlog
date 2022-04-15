import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
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
