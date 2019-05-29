import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bw-main mat-drawer-container mat-drawer-content mat-toolbar')).getText();
  }
}
