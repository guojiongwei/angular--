// 在life.component.ts代码
import { Component,  OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

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
      this.log('constructor');
  }
  // 页面初始化
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
}
