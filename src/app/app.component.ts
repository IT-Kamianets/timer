import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minutes: number = 0;
  seconds: number = 0;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.minutes = 0;
    this.seconds = 0;
  }
}
