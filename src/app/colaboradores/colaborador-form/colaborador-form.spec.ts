/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module';
import { ColaboradorFormComponent } from './colaborador-form.component';
import { Jsonp, ConnectionBackend, RequestOptions, BaseRequestOptions, JsonpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';



describe('Colaborador Component', () => {
  let component: ColaboradorFormComponent;
  let fixture: ComponentFixture<ColaboradorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        JsonpModule
      ],
      providers: [ Jsonp, MockBackend, BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
      }
         ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Instância ColaboradorFormComponent', () => {
    it('Verifica se ColaboradorFormComponent está sendo instânciado da forma correta', () => {
      expect(component).toBeTruthy();
    });
  });
});

