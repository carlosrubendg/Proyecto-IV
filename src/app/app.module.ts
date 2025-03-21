import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChatComponent } from './components/chat/chat.component';
import { FAQComponent } from './components/faq/faq.component';

import { FormsModule } from '@angular/forms';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent,
    FAQComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
