import { element, browser, by, Key } from 'protractor';

export class ProjectPage {
    getPage() {
        return browser.get('/projetos');
    }

    getFirstProject() {
        // tslint:disable-next-line:max-line-length
        return element(by.xpath('/html/body/app-root/div[2]/app-projetos/div/app-projetos-list/div/mat-nav-list/mat-accordion/mat-expansion-panel[1]/mat-expansion-panel-header/span[1]/mat-panel-description'));
    }
    getFirstProjectEdit() {
        // tslint:disable-next-line:max-line-length
        return element(by.xpath('/html/body/app-root/div[2]/app-projetos/div/app-projetos-list/div/mat-nav-list/mat-accordion/mat-expansion-panel[1]/div/div/mat-action-row/button[1]'));
    }
    getAddButton() {
        return element(by.xpath('/html/body/app-root/div[2]/app-projetos/div/div/button'));
    }
    getFirstProjectDescription() {
        // tslint:disable-next-line:max-line-length
        return element(by.xpath('/html/body/app-root/div[2]/app-projetos/div/app-projetos-list/div/mat-nav-list/mat-accordion/mat-expansion-panel[1]/div/div/mat-list/mat-list-item[4]/div'));
    }
    getLocateProject() {
        return element(by.xpath('/html/body/app-root/div[2]/app-projetos/div/app-projetos-list/div/mat-form-field/div/div[1]/div/input'));
    }
}
