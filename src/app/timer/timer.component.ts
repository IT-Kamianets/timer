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

  ngOnInit() {
    this.updateDisplay();
  }

  updateDisplay() {
    this.display = `${this.hours.toString().padStart(2, '0')}:${this.minutes
      .toString()
      .padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  }

  startTimer() {
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
    this.updateDisplay();
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  playSound() {
    const audio = new Audio('src/assets/alarm.mp3'); // Задайте правильний шлях до файлу
    audio.play().catch((error) => {
        console.error("Error playing sound:", error);
    });
  }
}
