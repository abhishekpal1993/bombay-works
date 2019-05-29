import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'bw-area-calc',
  templateUrl: './area-calc.component.html',
  styleUrls: ['./area-calc.component.scss']
})
export class AreaCalcComponent implements OnInit {

  shapes = [
    { label: 'Rectangle', value: 1 },
    { label: 'Circle', value: 2 },
    { label: 'Square', value: 3 },
    { label: 'Eclipse', value: 4 },
  ];
  shapeItem: Number;
  stepCalc: Number;
  rectangleForm: any;
  circleForm: any;
  squareForm: any;
  eclipseForm: any;
  total: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.reinitializeValues();
  }

  reinitializeValues() {
    this.shapeItem = 0;
    this.stepCalc = 1;
    this.total = 0;
  }

  evaluateShape() {
    if ((this.shapeItem <= 4) && (this.shapeItem >= 1)) {
      this.stepCalc = 2;
      switch (this.shapeItem) {
        case 1: this.buildRectangleForm(); break;
        case 2: this.buildCircleForm(); break;
        case 3: this.buildSquareForm(); break;
        case 4: this.buildEclipseForm(); break;
      }
    } else {
      this.reinitializeValues();
    }
  }

  buildRectangleForm() {
    this.rectangleForm = this.fb.group({
      width: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
      height: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
    });
  }

  rectangleArea() {
    if (this.rectangleForm.invalid) {
      this.rectangleForm.markAsTouched();
    } else {
      const rectangleProps = Object.keys(this.rectangleForm.value);
      this.total = 1;
      for (const prop of rectangleProps) {
        this.total = parseFloat(this.total) * parseFloat(this.rectangleForm.value[prop]);
      }
      this.stepCalc = 3;
    }
  }

  buildCircleForm() {
    this.circleForm = this.fb.group({
      diameter: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
    });
  }

  circleArea() {
    if (this.circleForm.invalid) {
      this.circleForm.markAsTouched();
    } else {
      const rectangleProps = Object.keys(this.circleForm.value);
      this.total = 3.14 / 4;
      for (const prop of rectangleProps) {
        this.total = parseFloat(this.total) * parseFloat(this.circleForm.value[prop]) * parseFloat(this.circleForm.value[prop]);
      }
      this.stepCalc = 3;
    }
  }

  buildSquareForm() {
    this.squareForm = this.fb.group({
      width: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
    });
  }

  squareArea() {
    if (this.squareForm.invalid) {
      this.squareForm.markAsTouched();
    } else {
      this.total = 2;
      const rectangleProps = Object.keys(this.squareForm.value);
      for (const prop of rectangleProps) {
        this.total = parseFloat(this.total) * parseFloat(this.squareForm.value[prop]);
      }
      this.stepCalc = 3;
    }
  }

  buildEclipseForm() {
    this.eclipseForm = this.fb.group({
      width: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
      height: [null, [
        Validators.required,
        Validators.pattern('^([0-9]+(\.[0-9]+)?)')
      ]],
    });
  }

  eclipseArea() {
    if (this.eclipseForm.invalid) {
      this.eclipseForm.markAsTouched();
    } else {
      const rectangleProps = Object.keys(this.eclipseForm.value);
      this.total = 3.14;
      for (const prop of rectangleProps) {
        this.total = parseFloat(this.total) * parseFloat(this.eclipseForm.value[prop]);
      }
      this.stepCalc = 3;
    }
  }

  getShape() {
    switch (this.shapeItem) {
      case 1: this.buildRectangleForm(); return 'rectangle';
      case 2: this.buildRectangleForm(); return 'circle';
      case 3: this.buildRectangleForm(); return 'square';
      case 4: this.buildRectangleForm(); return 'eclipse';
    }
  }
}
