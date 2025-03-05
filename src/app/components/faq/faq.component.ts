import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  faqs = [
    { question: '¿Cuánto tiempo tarda una reparación?', answer: 'Depende del daño, pero en general de 30 minutos a 2 horas.', open: false },
    { question: '¿Tienen garantía?', answer: 'Sí, ofrecemos garantía de 3 meses en reparaciones.', open: false },
    { question: '¿Necesito cita para reparar mi celular?', answer: 'No es necesario, pero puedes agendar para mayor comodidad.', open: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
