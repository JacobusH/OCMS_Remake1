import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupManagerComponent } from './signup-manager.component';

describe('SignupManagerComponent', () => {
  let component: SignupManagerComponent;
  let fixture: ComponentFixture<SignupManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
