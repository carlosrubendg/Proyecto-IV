import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  mostrarLogin: boolean = true;
  usuario: string = '';
  password: string = '';
  usuarioLogueado: string | null = null;  // Variable para almacenar el usuario logueado

  toggleFormulario() {
    this.mostrarLogin = !this.mostrarLogin;
  }

  login() {
    const adminUser = { usuario: 'admin', password: '1234' };

    if (this.usuario === adminUser.usuario && this.password === adminUser.password) {
      this.usuarioLogueado = this.usuario;  // Guardamos el usuario logueado
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  logout() {
    this.usuarioLogueado = null; // Cerramos sesión
    this.usuario = '';  // Limpiamos campos
    this.password = '';
  }
}
