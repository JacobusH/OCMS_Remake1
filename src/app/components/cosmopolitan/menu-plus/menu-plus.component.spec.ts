import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlusComponent } from './menu-plus.component';

describe('MenuPlusComponent', () => {
  let component: MenuPlusComponent;
  let fixture: ComponentFixture<MenuPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
