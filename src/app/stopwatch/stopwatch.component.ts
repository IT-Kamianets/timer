import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'] // Виправлено на styleUrls
})
export class StopwatchComponent {
  time: number = 0;
  interval: any;
  display: string = '00:00';

  updateDisplay() {
    let minutes = Math.floor(this.time / 60).toString().padStart(2, '0');
    let seconds = (this.time % 60).toString().padStart(2, '0');
    this.display = `${minutes}:${seconds}`;
  }

  startTimer() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.time++;
        this.updateDisplay();
      }, 1000);
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
