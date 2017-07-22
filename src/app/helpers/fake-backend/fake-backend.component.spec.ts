import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBackendComponent } from './fake-backend.component';

describe('FakeBackendComponent', () => {
  let component: FakeBackendComponent;
  let fixture: ComponentFixture<FakeBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
