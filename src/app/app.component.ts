import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  time: number = 0;
  interval: any;
  display: string = '00:00:00';
  backgroundClass: string = 'bg1'; // Додано клас для фону

  updateDisplay() {
    const h = Math.floor(this.time / 3600000).toString().padStart(2, '0');
    const m = Math.floor((this.time % 3600000) / 60000).toString().padStart(2, '0');
    const s = Math.floor((this.time % 60000) / 1000).toString().padStart(2, '0');
    this.display = `${h}:${m}:${s}`;
  }

  startTimer() {
    this.time = (this.hours * 3600 + this.minutes * 60 + this.seconds) * 1000; // Конвертація в мілісекунди
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time -= 1000; // Зменшуємо на 1000 мілісекунд (1 секунда)
        this.updateDisplay();
      } else {
        this.pauseTimer();
        alert("Time's up!"); // Сповіщення, коли час вичерпано
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  resetTimer() {
    this.pauseTimer();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.time = 0;
    this.updateDisplay();
  }

  changeBackground(bg: string) {
    this.backgroundClass = bg; // Змінюємо клас фону
  }

  ngOnInit() {
    this.updateDisplay();
  }
}
