import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManufactComponent } from './home-manufact.component';

describe('HomeManufactComponent', () => {
  let component: HomeManufactComponent;
  let fixture: ComponentFixture<HomeManufactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeManufactComponent]
    });
    fixture = TestBed.createComponent(HomeManufactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
