import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaDoUsuarioComponent } from './pagina-do-usuario/pagina-do-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PaginaDoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
