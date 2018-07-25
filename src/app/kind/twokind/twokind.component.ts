import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-twokind',
  templateUrl: './twokind.component.html',
  styleUrls: ['./twokind.component.scss']
})
export class TwokindComponent implements OnInit {
  private list: Array<any>;
  constructor(public routeinfo: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.getKinds();
  }
  getKinds () {
    const pid = this.routeinfo.snapshot.params.pid;
    $.getJSON(
      `https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid=${pid}&_=1532006966523&callback=?`
    , (res) => {
      this.list = res.value.category_1.list;
      let arr = [];
      for (let i in res.value) {
        arr.push(res.value[i]);
      };
      console.log(arr);
      this.list = arr;
    });
  }
  gotwokind (item: string) {
    const fcid = item.split('fcid=')[1].split('&')[0];
       this.router.navigate(['/list', fcid]);
  }
}

