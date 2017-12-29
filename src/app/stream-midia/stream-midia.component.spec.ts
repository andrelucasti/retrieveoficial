import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamMidiaComponent } from './stream-midia.component';

describe('StreamMidiaComponent', () => {
  let component: StreamMidiaComponent;
  let fixture: ComponentFixture<StreamMidiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamMidiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
