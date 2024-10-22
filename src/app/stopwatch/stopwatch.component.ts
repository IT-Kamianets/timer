import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  time: number = 0; // Весь час у мілісекундах
  interval: any;
  display: string = '00:00:00'; // Формат для відображення мілісекунд

  updateDisplay() {
    const minutes = Math.floor(this.time / 60000).toString().padStart(2, '0'); // Перетворення на хвилини
    const seconds = Math.floor((this.time % 60000) / 1000).toString().padStart(2, '0'); // Перетворення на секунди
    const milliseconds = Math.floor((this.time % 1000) / 10).toString().padStart(2, '0'); // Перетворення на мілісекунди
    this.display = `${minutes}:${seconds}:${milliseconds}`; // Форматування для відображення
  }

  startTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.time += 10; // Збільшуємо на 10 мілісекунд
        this.updateDisplay();
      }, 10); // Оновлення кожні 10 мілісекунд
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  resetTimer() {
    this.pauseTimer();
    this.time = 0;
    this.updateDisplay();
  }

  ngOnInit() {
    this.updateDisplay();
  }
}
