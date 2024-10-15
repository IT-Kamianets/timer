import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Додано для доступу до пайпів, таких як 'number'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Реєстрація компонента
  ],
  imports: [
    BrowserModule,
    CommonModule // Імпорт CommonModule для пайпів
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
