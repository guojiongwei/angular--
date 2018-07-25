import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwokindComponent } from './twokind.component';

describe('TwokindComponent', () => {
  let component: TwokindComponent;
  let fixture: ComponentFixture<TwokindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwokindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwokindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
