import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Імпортуємо FormsModule
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent, // Реєстрація компонента таймера
    StopwatchComponent // Реєстрація компонента секундоміра
  ],
  imports: [
    BrowserModule,
    FormsModule // Додаємо FormsModule тут
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
