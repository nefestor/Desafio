import { element, browser, by, Key } from 'protractor';

export class CorePage {
    getPage() {
        return browser.get('/home');
    }

    getPageTitle() {
        return browser.getTitle();
    }
    getHomeTitle() {
        return browser.element(by.tagName('h1')).getText();
    }

}
