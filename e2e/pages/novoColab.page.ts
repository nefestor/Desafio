import { element, browser, by } from 'protractor';

export class NovoColabPage {

    setNome() {
        return browser.element(by.name('nome'));
    }
    setEmail() {
        return browser.element(by.name('email'));
    }
    setPhone() {
        return browser.element(by.name('phone'));
    }
    setBirth() {
        return browser.element(by.name('birth'));
    }
    setWorkload() {
        return browser.element(by.name('workload'));
    }
    getPage() {
        return browser.get('/colaboradores/novo');
    }
    getTitle() {
        return browser.element.all(by.tagName('span')).first().getText();
    }
}
