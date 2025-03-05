import { Component, OnInit } from '@angular/core';

interface Message {
  sender: 'user' | 'support';
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  isChatOpen: boolean = false;
  supportReplies: string[] = [
    '¿En qué puedo ayudarte hoy?',
    'Estamos trabajando para solucionar tu problema.',
    'Gracias por contactarnos. Un momento por favor.',
    'Nuestro equipo revisará tu consulta pronto.'
  ];

  ngOnInit(): void {
    // Mensaje inicial de bienvenida
    this.messages.push({
      sender: 'support',
      text: '¡Bienvenido a Tecnoyorsh! ¿Cómo podemos ayudarte?',
      timestamp: new Date()
    });
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(): void {
    if (this.newMessage.trim() === '') return;

    // Mensaje del usuario
    this.messages.push({
      sender: 'user',
      text: this.newMessage,
      timestamp: new Date()
    });

    // Simular respuesta de soporte
    setTimeout(() => {
      const randomReply = this.supportReplies[
        Math.floor(Math.random() * this.supportReplies.length)
      ];
      
      this.messages.push({
        sender: 'support',
        text: randomReply,
        timestamp: new Date()
      });
    }, 1000);

    this.newMessage = '';
  }
}