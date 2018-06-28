import { element, browser, by } from 'protractor';

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
}
