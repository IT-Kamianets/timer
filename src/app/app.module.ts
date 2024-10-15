import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Потрібно для використання пайпів, таких як 'number'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Реєстрація вашого компонента
  ],
  imports: [
    BrowserModule,
    CommonModule // Імпорт CommonModule для доступу до пайпів
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
