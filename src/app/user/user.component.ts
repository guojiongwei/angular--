import { Component,  OnInit, Input, ViewChild, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { CartComponent } from './../cart/cart.component';
import { FooterComponent } from './../footer/footer.component';
// 在life.component.ts代码

@Component({
  selector: 'app-life',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() item: String = '';
  private index: any = 0;
  log(arg): void {
    console.log(`#${this.index}我是${arg}内容`);
    this.index ++;
  }
  constructor() {
      console.log('constructor');
  }
  // 页面初始化
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  formChild(item: string) {
    console.log(item);
  }
  onChild(i: any) {
    console.log(i);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
