import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() private page: Number;
  private list: Array<object> = [
    {path: '/', title: '首页', icon: 'iconfont icon-shouye'},
    {path: '/kind', title: '分类', icon: 'iconfont icon-fenlei'},
    {path: '/cart', title: '购物车', icon: 'iconfont icon-gouwuche'},
    {path: '/user', title: '我的', icon: 'iconfont icon-wode'}
  ];
  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
