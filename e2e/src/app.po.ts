import { browser, by, element } from 'protractor';

export class AppPage {
  
  // navigateTo() {
  //   return browser.get('/');
  // }

  // getParagraphText() {
  //   return element(by.css('app-root h1')).getText();
  // }

  login() {
    browser.get('register-login');
    element(by.name('username')).sendKeys("Jessica");
    element(by.name('password')).sendKeys("123");
    element(by.id('loginButton')).click();
  }

}
