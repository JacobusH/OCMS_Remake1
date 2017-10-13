import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTilesComponent } from './home-tiles.component';

describe('HomeTilesComponent', () => {
  let component: HomeTilesComponent;
  let fixture: ComponentFixture<HomeTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
