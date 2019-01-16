import { Component, OnInit, NgModule } from '@angular/core';
import $ from 'jquery';
import { callbackify } from 'util';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public routeinfo: ActivatedRoute) { }
  private sorts: any;
  private pro_list: Array<any>;
  private fcid: any;
  ngOnInit() {
    console.log(this.routeinfo.snapshot.params);
    if (this.routeinfo.snapshot.params.fcid > 0) {
      this.fcid = this.routeinfo.snapshot.params.fcid;
      this.sort('pop');
    } else {
      this.fcid = this.routeinfo.snapshot.params.fcid;
      this.search(this.fcid, 'pop');
    }
  }
// 流行
  sort (sort) {
    this.sorts = sort;
    if (this.fcid > 0) {
      $.getJSON(`http://list.meilishuo.com/search?frame=0&page=1&sort=${this.sorts}&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=46f728c0-ff2b-46dc-847d-e1b31ec890de&fcid=${this.fcid}&_=1532013966262&callback=?`, (res) => {
        console.log(res);
        this.pro_list = res.data.list;
      });
    } else {
      this.search(this.fcid, sort);
    }
  }
  search(title: String, sort: String) {
    this.sorts = sort;
    $.getJSON(`http://list.meilishuo.com/search?frame=0&page=1&sort=${sort}&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=${title}&_mgjuuid=8b5b131f-03bd-486e-8b92-2de04d610811&_=1543849958382&callback=?`, res => {
      if (res.success) {
        console.log(res);
        this.pro_list = res.data.list;
      }
    });
  }
}

