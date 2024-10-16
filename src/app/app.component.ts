import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Додай стиль, якщо потрібно
})
export class AppComponent {
  minutes: number = 0;
  seconds: number = 0;
  private timerInterval: any;
  isRunning: boolean = false; // Додай цю змінну

  startTimer() {
    if (!this.isRunning) { // Перевірка, чи таймер не запущений
      this.isRunning = true; // Встановлюємо, що таймер запущений
      this.timerInterval = setInterval(() => {
        if (this.seconds === 59) {
          this.minutes++;
          this.seconds = 0;
        } else {
          this.seconds++;
        }
      }, 1000);
    }
  }

  pauseTimer() {
    this.isRunning = false; // Встановлюємо, що таймер зупинений
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.isRunning = false; // Встановлюємо, що таймер зупинений
    clearInterval(this.timerInterval);
    this.minutes = 0;
    this.seconds = 0;
  }
}
