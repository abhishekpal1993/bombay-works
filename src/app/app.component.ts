import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'bw-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BombayWorks';
  logo = '../assets/images/logo.png';
  year = new Date().getFullYear();

  navigationSideMenu = [
    { link: '', label: 'Shape Calculator' },
    { link: 'tasks', label: 'Task Details' },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'));
  }
}
