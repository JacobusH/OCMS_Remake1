import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEqualComponent } from './validate-equal.component';

describe('ValidateEqualComponent', () => {
  let component: ValidateEqualComponent;
  let fixture: ComponentFixture<ValidateEqualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateEqualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateEqualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
