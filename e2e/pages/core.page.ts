import { element, browser, by, Key } from 'protractor';

export class CorePage {
    getPage() {
        return browser.get('/home');
    }
    getProjetoButton() {
        return element(by.xpath('/html/body/app-root/div[1]/mat-toolbar/button[2]'));
    }
    getPageTitle() {
        return browser.getTitle();
    }
    getHomeTitle() {
        return browser.element(by.tagName('h1')).getText();
    }
    getColabButton() {
        return element(by.xpath('/html/body/app-root/div[1]/mat-toolbar/button[3]'));
    }

}
