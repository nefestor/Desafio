import { NovoColabPage } from './pages/novoColab.page';
import { browser, protractor, element, by, WebElement } from 'protractor';
import { NovoProjetoPage } from './pages/novoProjeto.page';
import { CorePage } from './pages/core.page';
import { ProjectPage } from './pages/projetos.page';
import { ColabPage } from './pages/colab.page';
import * as faker from 'faker';

describe('Desafio E2E Test Suite', () => {
    const novoColabPage = new NovoColabPage();
    const novoProjetoPage = new NovoProjetoPage();
    const projectPage = new ProjectPage();
    const corePage = new CorePage();
    const colabPage = new ColabPage();
    let popupAlert, alertText;
    // tslint:disable-next-line:prefer-const

    describe('Testes de Sistema', () => {

        it('Teste de Sistema 1', () => {
            corePage.getPage();
            corePage.getProjetoButton().click();
            projectPage.getPage();
            projectPage.getAddButton().click();
            novoProjetoPage.getPage();
            novoProjetoPage.getName().sendKeys(faker.name.findName());
            novoProjetoPage.getStart().sendKeys('05012019');
            novoProjetoPage.getFinish().sendKeys('05012020');
            novoProjetoPage.getDescription().sendKeys('Projeto de teste de software da UTFPR');
            novoProjetoPage.getButton().click();

            popupAlert = browser.switchTo().alert();
            alertText = popupAlert.getText();
            expect(alertText).toMatch('Projeto cadastrado com sucesso');
            novoProjetoPage.getAlert().accept();

            projectPage.getPage();
            corePage.getProjetoButton().click();
        });

        it('Teste de Sistema 2', () => {
            corePage.getPage();
            corePage.getProjetoButton().click();
            projectPage.getPage();
            projectPage.getFirstProject().click();
            expect(projectPage.getFirstProjectDescription().getText()).toMatch('Projeto de teste de software da UTFPR');
            projectPage.getFirstProject().click();
        });

        it('Teste de Sistema 3', () => {
            corePage.getPage();
            corePage.getColabButton().click();
            colabPage.getPage();
            colabPage.getAddButton().click();
            novoColabPage.getPage();
            novoColabPage.getNome().sendKeys(faker.name.findName());
            novoColabPage.getEmail().sendKeys(faker.internet.email());
            novoColabPage.getPhone().sendKeys('43996685744');
            novoColabPage.getBirth().sendKeys('05011996');
            novoColabPage.getWorkload().sendKeys('0600');
            novoColabPage.getButton().click();

            popupAlert = browser.switchTo().alert();
            alertText = popupAlert.getText();
            expect(alertText).toMatch('Usuário Cadastrado com Sucesso');
            novoColabPage.getAlert().accept();

            colabPage.getPage();
            novoColabPage.getBackButton().click();
        });

        it('Teste de Sistema 4', () => {
            corePage.getPage();
            corePage.getColabButton().click();
            colabPage.getPage();
            colabPage.getFirstColab().click();
            colabPage.getFirstColabEdit().click();
            novoColabPage.getNome().sendKeys(faker.name.findName());
            novoColabPage.getButton().click();

            popupAlert = browser.switchTo().alert();
            alertText = popupAlert.getText();
            expect(alertText).toMatch('Usuário alterado com sucesso');

            novoColabPage.getAlert().accept();
            colabPage.getPage();
            novoColabPage.getBackButton().click();
        });
    });
});
