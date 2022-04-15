import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost : BlogPost = {
    _id: "",
    title: "",
    postDate: "",
    featuredImage: "",
    post: "",
    postedBy: "",
    comments: [],
    category: "",
    tags: [],
    isPrivate: false,
    views: 0
  }; 
  tags : string = "";

  constructor(private _pstSrvc : PostService, private routerNav: Router, private actRoute : ActivatedRoute) { }
  sleep (time : any) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this._pstSrvc.updatePostById(this.blogPost._id, this.blogPost).subscribe();
    this.sleep(100).then(() => {
      this.routerNav.navigate(['admin']);
    });
  }

  deletePost() {
    this._pstSrvc.deletePostById(this.blogPost._id).subscribe();
    this.sleep(100).then(() => {
      this.routerNav.navigate(['admin']);
    });
  }

  ngOnInit(): void {
    this._pstSrvc.getPostbyId(this.actRoute.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    });
  }

}
