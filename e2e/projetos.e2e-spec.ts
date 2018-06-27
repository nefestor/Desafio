import { ProjectPage } from './pages/projetos.page';

describe('', () => {
    const projetosPage = new ProjectPage();

    describe('Projetos Page', () => {
        beforeAll(() => {
            projetosPage.getPage();
        });

        it('Verifica se o primeiro projeto está correto', () => {
            projetosPage.getFirstProject()
                .then((title: string) => {
                    expect(title).toEqual('Nome: Projeto Novo');
                });
        });
    });
});
