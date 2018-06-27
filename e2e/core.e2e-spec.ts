import { CorePage } from './pages/core.page';

describe('', () => {
    const corePage = new CorePage();

    describe('Home Page', () => {
        beforeAll(() => {
            corePage.getPage();
        });

        it('Verifica se a descrição da página está correta', () => {
            corePage.getPageTitle()
                .then((title: string) => {
                    expect(title).toEqual('Desafio');
                });
        });

        it('Verifica se o titulo está correto', () => {
            corePage.getHomeTitle()
            .then((title: string) => {
                expect(title).toEqual('Desafio Angular');
            });
        });
    });
});
