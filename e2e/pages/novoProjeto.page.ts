import { element, browser, by } from 'protractor';

export class NovoProjetoPage {

    getPage() {
        return browser.get('/projetos/novo');
    }
    getName() {
        return browser.element(by.name('name'));
    }
    getStart() {
        return browser.element(by.name('start'));
    }
    getFinish() {
        return browser.element(by.name('finish'));
    }
    getDescription() {
        return browser.element(by.name('description'));
    }
    getTitle() {
        return browser.element.all(by.tagName('span')).first().getText();
    }
}
