import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  protected title = 'laboIV';

  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  protected Calcular()
{
  this.suma = this.edadUno + this.edadDos;
  this.promedio = this.suma / 2;
}

protected Limpiar()
{
  this.edadUno = 0;
  this.edadDos = 0;
  this.promedio = 0;
  this.suma = 0;
}
}
