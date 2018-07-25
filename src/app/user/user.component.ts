import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CartComponent } from './../cart/cart.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild(CartComponent) child: CartComponent;
  father() {
    // 调用子组件方法
    // this.child.childFn();
    console.log(this);
  }
  constructor() { }

  ngOnInit() {
    console.log(this);
  }
  onChild(i: any) {
    // this.i = i;
    console.log(i);
  }
  // @Input()
  bar(event: any ) {
    console.log(event);
  }
  // tap () {
  //   console.log(this);
  //   this.child.tap();
  // }
}
