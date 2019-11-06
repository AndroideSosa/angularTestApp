import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular CalculadoraApp';

  uno: number;
  dos: number;
  resultado: number;
  usuarioActivo: boolean;
  texto: void;

  public ngOnInit(): void{}

  //Funcion para sumar dos números
  adicion(num1, num2): number {
    return this.resultado = num1+num2;
  }

  //Función para restar dos números
  restar(num1, num2): number {
    return this.resultado = num1-num2;
  }
  
  //Función para multiplicar dos números
  multiplicar(num1,num2): number {
    return this.resultado = num1*num2;
  }

  //Función para dividir dos números
  dividir(num1, num2): number {
    return this.resultado = num1/num2;
  }

 
  activarUsuario(): void {
    this.usuarioActivo = true;
  
}

  transformarTexto(letras): string {
   return letras+"1" ;
  }

}
