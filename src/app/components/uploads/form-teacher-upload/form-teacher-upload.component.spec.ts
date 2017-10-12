import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeacherUploadComponent } from './form-teacher-upload.component';

describe('FormTeacherUploadComponent', () => {
  let component: FormTeacherUploadComponent;
  let fixture: ComponentFixture<FormTeacherUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTeacherUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTeacherUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
