import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDatesComponent } from './tour-dates.component';

describe('TourDatesComponent', () => {
  let component: TourDatesComponent;
  let fixture: ComponentFixture<TourDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
