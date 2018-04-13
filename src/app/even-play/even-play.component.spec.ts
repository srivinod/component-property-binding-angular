import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenPlayComponent } from './even-play.component';

describe('EvenPlayComponent', () => {
  let component: EvenPlayComponent;
  let fixture: ComponentFixture<EvenPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
