import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'bw-shape-calc',
  templateUrl: './shape-calc.component.html',
  styleUrls: ['./shape-calc.component.scss']
})
export class ShapeCalcComponent implements OnInit {

  bannerImg: String;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth >= 400) {
      this.bannerImg = '../assets/images/banner.png';
    } else {
      this.bannerImg = '../assets/images/banner.1.png';
    }
  }

  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 400) {
      this.bannerImg = '../assets/images/banner.png';
    } else {
      this.bannerImg = '../assets/images/banner.1.png';
    }
  }

}
