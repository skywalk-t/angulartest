import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechildoneComponent } from './homechildone.component';

describe('HomechildoneComponent', () => {
  let component: HomechildoneComponent;
  let fixture: ComponentFixture<HomechildoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomechildoneComponent]
    });
    fixture = TestBed.createComponent(HomechildoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
