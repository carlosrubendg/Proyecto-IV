import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  mostrarLogin: boolean = true;

  toggleFormulario() {
    this.mostrarLogin = !this.mostrarLogin;
  }

}
