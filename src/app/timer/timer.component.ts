import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Додано OnInit
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
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
    this.interval = setInterval(() => {
      if (this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
        this.stopTimer();
        alert("Time's up!");
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
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.updateDisplay();
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
