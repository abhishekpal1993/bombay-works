import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeCalcComponent } from './shape-calc.component';
import { CoreModule } from '@bw/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaCalcComponent } from '../area-calc/area-calc.component';

describe('ShapeCalcComponent', () => {
  let component: ShapeCalcComponent;
  let fixture: ComponentFixture<ShapeCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        BrowserAnimationsModule
      ],
      declarations: [ ShapeCalcComponent, AreaCalcComponent ]
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
