import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGalleryItemUploadComponent } from './form-gallery-item-upload.component';

describe('FormGalleryItemUploadComponent', () => {
  let component: FormGalleryItemUploadComponent;
  let fixture: ComponentFixture<FormGalleryItemUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGalleryItemUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGalleryItemUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
