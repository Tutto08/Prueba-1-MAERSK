import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  HabilitarBoton() {
    let PruebaCajaTexto = (<HTMLInputElement>(
      document.getElementById('PruebaCajaTexto')
    )).value;
    let PruebaCajaNumerica = (<HTMLInputElement>(
      document.getElementById('PruebaCajaNumerica')
    )).value;
    let PruebaSelect = (<HTMLInputElement>(
      document.getElementById('PruebaSelect')
    )).value;

    const btn = document.getElementById(
      'BotonDatos'
    ) as HTMLButtonElement | null;
    if (
      PruebaCajaTexto != null &&
      PruebaCajaNumerica != null &&
      PruebaSelect != ''
    ) {
      btn.disabled = false;
    } else {
      if (PruebaCajaTexto == '' || PruebaCajaNumerica == '')
        btn.disabled = true;
    }
  }
}
