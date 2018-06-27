/*
import {
    JsonpModule,
    Jsonp,
    BaseRequestOptions,
    Response,
    ResponseOptions,
} from '@angular/http';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { ColaboradorService } from '../shared/colaborador.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../app.module';

describe('Colaborador Service', () => {

    let service: ColaboradorService;
    let backend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JsonpModule, HttpClientTestingModule],
            providers: [
                ColaboradorService,
                MockBackend,
                BaseRequestOptions,
                HttpClient,
                HttpHandler,
                AppModule,
                {
                    provide: Jsonp,
                    // tslint:disable-next-line:no-shadowed-variable
                    useFactory: (backend, options) => new Jsonp(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });

        // Get the MockBackend
        backend = TestBed.get(MockBackend);

        // Returns a service with the MockBackend so we can test with fake responses
        service = TestBed.get(ColaboradorService);

    });
    describe('Verificação de Email', () => {

        it('Verifica se existe email dicebard@email.com', fakeAsync(() => {
            // tslint:disable-next-line:prefer-const
            let resposta = {
                'results': [
                    {
                        'nome': 'Dicebarg',
                        'email': 'dicebarg@email.com',
                        'phone': '(11) 11111-1111',
                        'birth': '11/11/1991',
                        'workload': '06:00',
                        'scholarity': 'Especializacao',
                        'cadastro': '2018-06-17T06:17:55.638Z',
                    },
                    {
                        'nome': 'Tiago',
                        'email': 'tiago@email.com',
                        'phone': '(11) 11111-1111',
                        'birth': '11/11/1991',
                        'workload': '06:00',
                        'scholarity': 'Mestre',
                        'cadastro': '2018-06-19T07:20:22.638Z',
                    }
                ]
            };

            backend.connections.subscribe(connection => {
                connection.mockRespond(new Response(<ResponseOptions>{
                    body: JSON.stringify(resposta)
                }));
            });

            // Perform a request and make sure we get the response we expect
            service.verificaEmailTest('tiago@email.com');
            tick();

            expect(service.results[1].email).toBe('tiago@email.com');
        }));
    });

    describe('Verificação de Email Inexistente', () => {

        it('Verifica se existe email teste@email.com', fakeAsync(() => {
            // tslint:disable-next-line:prefer-const
            let resposta = {
                'results': [
                    {
                        'nome': null,
                        'email': null,
                        'phone': null,
                        'birth': null,
                        'workload': null,
                        'scholarity': null,
                        'cadastro': null,
                    }]
            };

            backend.connections.subscribe(connection => {
                connection.mockRespond(new Response(<ResponseOptions>{
                    body: JSON.stringify(resposta)
                }));
            });

            // Perform a request and make sure we get the response we expect

            service.verificaEmailTest('teste@email.com');
            tick();
            // Não há nada parecido com o assertNotEquals
            expect(service.results[0].nome).toBeNull();
        }));
    });
});

*/
