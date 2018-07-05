/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ColaboradoresListComponent } from './colaboradores-list.component';
import { ColaboradorService } from '../shared/colaborador.service';
import { JsonpModule } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('Colaborador Component', () => {
    let component: ColaboradoresListComponent;
    let fixture: ComponentFixture<ColaboradoresListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ JsonpModule  ],
            declarations: [ColaboradoresListComponent],
            providers: [ ColaboradorService, HttpClient, HttpHandler ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColaboradoresListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Instância ColaboradorComponent', () => {
        it('Verifica se ColaboradorComponent está sendo instânciado da forma correta', () => {
            expect(component).toBeTruthy();
        });
    });

});

