import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosListComponent } from './projetos-list.component';

describe('ProjetosListComponent', () => {
  let component: ProjetosListComponent;
  let fixture: ComponentFixture<ProjetosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
