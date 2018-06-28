import { ProjectPage } from './pages/projetos.page';
import { NovoProjetoPage } from './pages/novoProjeto.page';
import { element, by, browser } from 'protractor';

describe('', () => {
    const projetosPage = new ProjectPage();
    const novoProjetoPage = new NovoProjetoPage();

    describe('Projetos Page', () => {
        beforeAll(() => {
            projetosPage.getPage();
            novoProjetoPage.getPage();
        });
        // Problema em capturar tags do Material Design
        it('Verifica se o primeiro projeto está correto', () => {
            projetosPage.getFirstProject()
                .then((title: string) => {
                    expect(title).toEqual('Home');
                });
        });

        it('Testa Cadastro de Novo Usuario', () => {
            novoProjetoPage.getName().sendKeys('Projetinho Novo');
            novoProjetoPage.getStart().sendKeys('11102018');
            novoProjetoPage.getFinish().sendKeys('11102019');
            novoProjetoPage.getDescription().sendKeys('Projeto de teste de software da UTFPR');
            element(by.css('.mat-raised-button')).click();
        });
    });
});
