import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() names: any = {};
  childFn () {
    console.log('我是子类的方法');
  }
  @Output() toParent: EventEmitter<any> = new EventEmitter();
  constructor() {
    setInterval(() => {
    }, 1000);
}
  todo(event: any) {
    this.toParent.emit('11111111111111');
    console.log('11111111');
  }
  ngOnInit() {
  }
}
