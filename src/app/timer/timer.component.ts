import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  initialHours: number = 0;
  initialMinutes: number = 0;
  initialSeconds: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  display: string = '00:00:00';
  interval: any;
  errorMessage: string = ''; // Додано для повідомлень про помилки

  ngOnInit() {
    this.updateDisplay();
  }

  updateDisplay() {
    this.display = `${this.hours.toString().padStart(2, '0')}:${this.minutes
      .toString()
      .padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  }

  validateInputs(): boolean {
    if (this.initialMinutes < 0 || this.initialMinutes > 59) {
      this.errorMessage = 'Хвилини мають бути в діапазоні 0–59!';
      return false;
    }
    if (this.initialSeconds < 0 || this.initialSeconds > 59) {
      this.errorMessage = 'Секунди мають бути в діапазоні 0–59!';
      return false;
    }
    if (isNaN(this.initialHours) || isNaN(this.initialMinutes) || isNaN(this.initialSeconds)) {
      this.errorMessage = 'Всі поля мають бути заповнені числами!';
      return false;
    }
    this.errorMessage = ''; // Якщо все добре, очищуємо повідомлення
    return true;
  }

  startTimer() {
    if (!this.validateInputs()) return; // Перевіряємо ввід перед запуском

    this.stopTimer();
    this.hours = this.initialHours;
    this.minutes = this.initialMinutes;
    this.seconds = this.initialSeconds;

    this.updateDisplay();

    this.interval = setInterval(() => {
      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        this.stopTimer();
        this.playSound(); // Відтворити звук при завершенні таймера
      } else {
        this.decrementTime();
      }
    }, 1000);
  }

  decrementTime() {
    if (this.seconds > 0) {
      this.seconds--;
    } else if (this.minutes > 0) {
      this.minutes--;
      this.seconds = 59;
    } else if (this.hours > 0) {
      this.hours--;
      this.minutes = 59;
      this.seconds = 59;
    }
    this.updateDisplay();
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pauseTimer();
    this.initialHours = 0;
    this.initialMinutes = 0;
    this.initialSeconds = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.errorMessage = ''; // Очищаємо помилку при скиданні
    this.updateDisplay();
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  playSound() {
    const audio = new Audio('assets/alarm.mp3'); // Задайте правильний шлях до файлу
    audio.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
  }
}
