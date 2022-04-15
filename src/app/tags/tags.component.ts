import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string> = [];

  constructor(private _pstSrvc : PostService) { }

  ngOnInit(): void {
    this._pstSrvc.getTags().subscribe(data => {
      if (data.length > 0) {
        this.tags = data;
      }
    });
  }

}
