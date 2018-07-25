import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {
  private show = false;
  constructor() { }
  ngOnInit() {
  }
  isShow () {
    this.show = !this.show;
  }
}
