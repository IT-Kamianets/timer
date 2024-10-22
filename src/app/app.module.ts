import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Потрібно для використання пайпів, таких як 'number'

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent // Реєстрація вашого компонента
  ],
  imports: [
    TimerComponent,
    StopwatchComponent,
    BrowserModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }) // Імпорт CommonModule для доступу до пайпів
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
