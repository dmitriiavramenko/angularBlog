import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  commentName: string = "";
  commentText: string = "";
  post : BlogPost = {
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
  querySub : any;
  constructor(private _pstSrvc : PostService, private route: ActivatedRoute) { }

  submitComment() {

    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toDateString()
    });
    this._pstSrvc.updatePostById(this.post._id, this.post).subscribe();
    this.commentName = "";
    this.commentText = "";
  }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this._pstSrvc.getPostbyId(params['id']).subscribe(data => {
          this.post = data;
      });
     })
  }

  ngOnDestroy() : void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
