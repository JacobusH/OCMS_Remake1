import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivechatComponent } from './livechat.component';

describe('LivechatComponent', () => {
  let component: LivechatComponent;
  let fixture: ComponentFixture<LivechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
