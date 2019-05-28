import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeCalcComponent } from './shape-calc.component';

describe('ShapeCalcComponent', () => {
  let component: ShapeCalcComponent;
  let fixture: ComponentFixture<ShapeCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
