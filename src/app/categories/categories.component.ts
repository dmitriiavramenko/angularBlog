import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<any> = [];   
  constructor(private _pstSrvc : PostService) { }

  ngOnInit(): void {
    this._pstSrvc.getCategories().subscribe(data => {
      if (data.length > 0) {
        this.categories = data;
      }
    });
  }

}
