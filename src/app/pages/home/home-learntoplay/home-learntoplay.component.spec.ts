import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLearntoplayComponent } from './home-learntoplay.component';

describe('HomeLearntoplayComponent', () => {
  let component: HomeLearntoplayComponent;
  let fixture: ComponentFixture<HomeLearntoplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLearntoplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLearntoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
