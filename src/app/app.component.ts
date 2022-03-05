import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Variável da página
  pagina1: boolean = true;

  //Função para alterar template
  alterarPagina() {
    this.pagina1 = !this.pagina1;
  }
}
