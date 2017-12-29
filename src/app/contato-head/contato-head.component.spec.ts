import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoHeadComponent } from './contato-head.component';

describe('ContatoHeadComponent', () => {
  let component: ContatoHeadComponent;
  let fixture: ComponentFixture<ContatoHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
