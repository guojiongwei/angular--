import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private list: Array<Object> = [
    { title: '默认排序' },
    { title: '按受益排序' },
    { title: '按朋友圈火热度排序' }
  ];
  private index: Number = 0;
  @Input() names: any = {};
  @Output() toParent: EventEmitter<any> = new EventEmitter();
  todo(event: any) {
    this.toParent.emit('11111111111111');
    console.log('11111111');
  }
  childFn () {
    console.log('我是子类的方法');
  }
  tap (i: Number) {
    this.index = i;
  }
  constructor() {
    setInterval(() => {
    }, 1000);
}

  ngOnInit() {
  }
}
