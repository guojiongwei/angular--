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
  private sorts = 1;
  private pro_list: Array<any>;
  private fcid: string;
  ngOnInit() {
    this.fcid = this.routeinfo.snapshot.params.fcid;
    this.sort('pop');
  }
// 流行
  sort (sort) {
    this.sorts = sort;
    $.getJSON(`http://list.meilishuo.com/search?frame=0&page=1&sort=${this.sorts}&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=46f728c0-ff2b-46dc-847d-e1b31ec890de&fcid=${this.fcid}&_=1532013966262&callback=?`, (res) => {
      console.log(res);
      this.pro_list = res.data.list;
    });
  }
}

