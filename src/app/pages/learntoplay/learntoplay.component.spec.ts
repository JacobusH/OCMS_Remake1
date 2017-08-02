import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearntoplayComponent } from './learntoplay.component';

describe('LearntoplayComponent', () => {
  let component: LearntoplayComponent;
  let fixture: ComponentFixture<LearntoplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearntoplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearntoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
