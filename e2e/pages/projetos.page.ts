import { element, browser, by, Key } from 'protractor';

export class ProjectPage {
    getPage() {
        return browser.get('/projetos');
    }

    getFirstProject() {
        return browser.element(by.tagName('span')).getText();
    }
}
