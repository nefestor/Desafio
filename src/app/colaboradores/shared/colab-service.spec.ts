import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module';
import { ColaboradorService } from './colaborador.service';


describe('Colaborador Component', () => {
    let service: ColaboradorService;
    let fixture: ComponentFixture<ColaboradorService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColaboradorService);
        service = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Instância ColaboradorService', () => {

        it('Verifica se ColaboradorService está sendo instânciado da forma correta', () => {
            expect(service).toBeTruthy();
        });

        it('Teste de Integração 1', () => {
            // tslint:disable-next-line:prefer-const
            let teste = {
                'results': [
                    {
                        'nome': 'Tiago',
                        'email': 'teste@teste.it',
                        'phone': '43996685744',
                        'birth': '05/01/1996',
                        'workload': '06:00',
                        'scholarity': null,
                        'cadastro': null,
                    }]
            };
            service.postColaborador(teste);
        });
    });
});
