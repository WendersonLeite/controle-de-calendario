import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoUsuarioComponent } from './pagina-do-usuario.component';

describe('PaginaDoUsuarioComponent', () => {
  let component: PaginaDoUsuarioComponent;
  let fixture: ComponentFixture<PaginaDoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDoUsuarioComponent]
    });
    fixture = TestBed.createComponent(PaginaDoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
