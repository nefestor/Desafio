import { element, browser, by } from 'protractor';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

export class NovoColabPage {

    getNome() {
        return browser.element(by.name('nome'));
    }
    getEmail() {
        return browser.element(by.name('email'));
    }
    getPhone() {
        return browser.element(by.name('phone'));
    }
    getBirth() {
        return browser.element(by.name('birth'));
    }
    getWorkload() {
        return browser.element(by.name('workload'));
    }
    getPage() {
        return browser.get('/colaboradores/novo');
    }
    getTitle() {
        return browser.element.all(by.tagName('span')).first().getText();
    }
    getButton() {
        return element.all(by.tagName('button')).last();
    }
    getAlert() {
        return browser.switchTo().alert();
    }
    getBackButton() {
        return element.all(by.tagName('button')).first();
    }
}
