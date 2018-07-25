import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }
  private banner: string;
  private itemInfo = '';
  ngOnInit() {
    $.ajax({
      url: `http://localhost:3000/detail?iid=${this.router.snapshot.params.iid}`,
      dataType: 'json',
      success: (res) => {
        this.banner = res.result.skuInfo.skus[0].img;
        this.itemInfo = res.result.itemInfo;
      }
    });
    // this.router.params
    //   .subscribe((params) => {
    //     console.log(params);
    //   });
  }
}
