import { element, browser, by, Key } from 'protractor';

export class ColabPage {
    getPage() {
        return browser.get('/colaboradores');
    }

    getAddButton() {
        return element(by.xpath('/html/body/app-root/div[2]/app-colaboradores/div/div/button'));
    }
    getFirstColab() {
        // tslint:disable-next-line:max-line-length
        return element(by.xpath('/html/body/app-root/div[2]/app-colaboradores/div/app-colaboradores-list/div/mat-nav-list/mat-accordion/mat-expansion-panel[1]/mat-expansion-panel-header/span[1]'));
    }
    getFirstColabEdit() {
        // tslint:disable-next-line:max-line-length
        return element(by.xpath('/html/body/app-root/div[2]/app-colaboradores/div/app-colaboradores-list/div/mat-nav-list/mat-accordion/mat-expansion-panel[1]/div/div/mat-action-row/button[1]'));
    }
}
