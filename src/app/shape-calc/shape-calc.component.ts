import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bw-shape-calc',
  templateUrl: './shape-calc.component.html',
  styleUrls: ['./shape-calc.component.scss']
})
export class ShapeCalcComponent implements OnInit {

  bannerImg: String = '../assets/images/banner.png';

  constructor() { }

  ngOnInit() {
    console.log('Hi');
  }

}
