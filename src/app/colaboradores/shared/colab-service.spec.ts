import axios from 'axios';

const API = 'http://localhost:3000/v1/users';

describe('Teste de Integração', () => {

    it(
        'Verifica retorno do GET - Nome do Usuário',
        async (
        ) => {
            const req = await axios.get(API);
            const underTest = req.data[0];
            expect(underTest.nome).toBe('teste 1');
        }
    );

    it(
        'should post user',
        async (
        ) => {
            axios.post(API, {
                nome: 'teste 1',
                email: 'testeIntegracao2@email.com',
                phone: '(43) 99668-5744',
                birth: '05/01/1996',
                workload: '06:00'
            })
                .then(function (response) {
                    expect(response.statusText).toBe('OK');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    );
});
