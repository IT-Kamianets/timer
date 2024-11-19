import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Додаємо FormsModule для ngModel

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';  // Standalone компонент
import { StopwatchComponent } from './stopwatch/stopwatch.component';  // Standalone компонент
import { TabataComponent } from './tabata/tabata.component';  // Не standalone

@NgModule({
  declarations: [
    AppComponent,
    TabataComponent   // Додаємо лише ті компоненти, які не standalone
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,      // Додаємо FormsModule для ngModel
    TimerComponent,   // Імпортуємо standalone компоненти
    StopwatchComponent // Імпортуємо standalone компоненти
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
