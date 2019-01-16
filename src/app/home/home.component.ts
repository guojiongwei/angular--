import { Component, OnInit, NgModule } from '@angular/core';
import $ from 'jquery';
import Swiper from 'swiper';
import { callbackify } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private ipt: any;
  private page = 1;
  private banner: Array<object>;
  private sorts = 1;
  private bannerlist: Array<any>;
  private pro_list: Array<any>;
  ngOnInit() {
    $.getJSON('https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=?', (res) => {
      console.log(res);
      this.bannerlist = res.data[13730].list;
      this.banner = res.data[43542].list;
    });
    this.sort('pop');
    setTimeout(() => {
      const mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        effect : 'coverflow',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      });
    }, 1000);
  }
// 流行
  sort (sort) {
    this.sorts = sort;
    $.getJSON(`http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=46f728c0-ff2b-46dc-847d-e1b31ec890de&sort=${sort}&_=1531639867403&callback=?`, (res) => {
      this.pro_list = res.data.list;
    });
  }
}

