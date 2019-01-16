import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  // @Output() private click: EventEmitter<any> = new EventEmitter();
  constructor(public router: Router) { }
  private search: String;
  private list: Array<Object>;
  ngOnInit() {
  }
  change() {
    // console.log(this.search);
    $.getJSON(`https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B"keyword"%3A"${this.search}"%7D&_=1543848383328&callback=?`, res => {
      console.log(res);
      if (res.success) {
        this.list = res.data.tips;
        console.log(this.list);
      }
    });
  }
  toList(event, title) {
    event.stopPropagation();
    console.log(title);
    this.router.navigate(['/list', title]);
    // this.click.next(title);
  }
  toHome() {
    this.router.navigate(['/']);
  }
}

