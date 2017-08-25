import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivechatManagerComponent } from './livechat-manager.component';

describe('LivechatManagerComponent', () => {
  let component: LivechatManagerComponent;
  let fixture: ComponentFixture<LivechatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivechatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivechatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
