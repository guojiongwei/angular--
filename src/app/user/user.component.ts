import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CartComponent } from './../cart/cart.component';
import { FooterComponent } from './../footer/footer.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private list = [1, 2, 3, 4];
  @ViewChild(CartComponent) child: CartComponent;
  @ViewChild(FooterComponent) child1: FooterComponent;
  father() {
    // 调用子组件方法
    // this.child.childFn();
    console.log(this);
  }
  constructor() { }

  ngOnInit() {
    console.log(this);
  }
  formChild(item: string) {
    console.log(item);
  }
  onChild(i: any) {
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
