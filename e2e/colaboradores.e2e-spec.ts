/*
import { NovoColabPage } from './pages/novoColab.page';
import { browser, protractor, element, by, WebElement } from 'protractor';

describe('Desafio E2E Test Suite', () => {
    const novoColabPage = new NovoColabPage();
    let popupAlert, alertText;

    describe('Novo Colaborador Page', () => {
        beforeAll(() => {
            novoColabPage.getPage();
        });

        it('Testa Cadastro de Novo Usuario', () => {
            novoColabPage.getNome().sendKeys('Tiago Pereira Coelho');
            novoColabPage.getEmail().sendKeys('tiago@email.com');
            novoColabPage.getBirth().sendKeys('05011996');
            novoColabPage.getPhone().sendKeys('123451234');
            novoColabPage.getWorkload().sendKeys('0600');
            element(by.css('.mat-raised-button')).click();

            // Trata alerta de colaborador existente

            popupAlert = browser.switchTo().alert();
            alertText = popupAlert.getText();
            expect(alertText).toMatch('Há um colaborador com esse e-mail, utilize outro.');
            popupAlert.dismiss();
        });

        it('Verifica se o titulo está correto', () => {
            novoColabPage.getTitle()
                .then((title: string) => {
                    expect(title).toEqual('Home');
                });
        });
    });
});
*/
