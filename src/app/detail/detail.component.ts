import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
import Swiper from 'swiper';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }
  private banner: Array<Object>;
  private detailBanner: Array<Object>;
  private columns: Array<Object>;
  private itemInfo: Object = {
    title: ''
  };
  ngOnInit() {
    $.ajax({
      url: `http://localhost:3000?iid=${this.router.snapshot.params.iid}`,
      dataType: 'json',
      success: (res) => {
        this.banner = res.result.itemInfo.topImages;
        this.detailBanner = res.result.detailInfo.detailImage[0].list;
        this.itemInfo = res.result.itemInfo;
        this.columns = res.result.columns.concat(Object.values(res.result.itemInfo.extra));
        console.log(this.detailBanner);
        setTimeout(() => {
      // window.onload = function() {
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
      // };
    }, 2000);
      }
    });
    // this.router.params
    //   .subscribe((params) => {
    //     console.log(params);
    //   });
  }
}
