import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emp1Component } from './emp1.component';

describe('Emp1Component', () => {
  let component: Emp1Component;
  let fixture: ComponentFixture<Emp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Emp1Component]
    });
    fixture = TestBed.createComponent(Emp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
