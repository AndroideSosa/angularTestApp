import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  
  let app: AppComponent;

  beforeEach(async(() =>{
   TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      FormsModule
    ],
    declarations: [
      AppComponent
    ],
  }).compileComponents();
  }));

  it('Se crea correctamente la aplicación', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`El título de la aplicación debe ser: 'Angular CalculadoraApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular CalculadoraApp');
  });

it('la suma debe ser 10' , () => {
  expect(app.adicion(5,5)).toEqual(10);
});

it('la resta debe ser 5' , () => {
  expect(app.restar(10,5)).toEqual(5);
});

it('la multiplicacion debe ser 28' , () => {
  expect(app.multiplicar(7,4)).toEqual(28);
});

it('la division debe ser 5' , () => {
  expect(app.dividir(10,2)).toEqual(5);
});
 

});
