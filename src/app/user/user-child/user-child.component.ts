import { Component, OnInit, AfterViewInit, DoCheck, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';
// import { EventEmitter } from 'events';
import { UserComponent } from './../user.component';
@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.scss']
})
export class UserChildComponent implements OnInit {
  @Output() private toUser: EventEmitter<any> = new EventEmitter();
  @Output() private toParent: EventEmitter<any> = new EventEmitter();
  @Input() list: Array<number>;
  // @viewParentEl(UserComponent) user: UserComponent;
  // @Output() private toparent = new EventEmitter();
  constructor() { }
  private num: number;
  ngOnInit() {
    this.num = 0;
    console.log(this);
   }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngDestory() {
    console.log('ngDestory');
  }
  toparent() {
    console.log(this);
    this.num = this.num ++;
    this.toParent.emit(this.num);
  }
  a() {
    console.log('父组件操作子组件');
  }
}
