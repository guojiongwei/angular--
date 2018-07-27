import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.scss']
})
export class KindComponent implements OnInit {
  private list: Array<any>;
  constructor(public router: Router) { }

  ngOnInit() {
    this.getKinds();
  }
  getKinds () {
    $.getJSON('http://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1531660140488&callback=?', (res) => {
      this.list = res.value;
    });
  }
  gotwokind (item: String) {
    if (item.indexOf('pid') !== -1) {
       const pid = item.split('pid=')[1].split('&')[0];
       this.router.navigate(['/twokind', pid]);
    } else {
        const fcid = item.split('fcid=')[1].split('&')[0];
        this.router.navigate(['/list', fcid]);
    }
  }
}
