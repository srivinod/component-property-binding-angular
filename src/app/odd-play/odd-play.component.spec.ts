import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddPlayComponent } from './odd-play.component';

describe('OddPlayComponent', () => {
  let component: OddPlayComponent;
  let fixture: ComponentFixture<OddPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
