import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Стан вкладок
  showTimer = true;
  showStopwatch = false;
  isTabataVisible = false;

  // Таймер
  timerValue: number = 60;
  timerInterval: any;

  // Секундомір
  stopwatchValue: number = 0;
  isStopwatchRunning: boolean = false;
  stopwatchInterval: any;

  // Табата
  isRunning: boolean = false;
  statusMessage: string = 'Підготовка';
  timerMessage: string = '00:00';
  currentRound: number = 0;
  rounds: number = 8;
  workDuration: number = 20; // секунд
  restDuration: number = 10; // секунд
  currentPhase: 'work' | 'rest' = 'work';
  tabataInterval: any;

  // Перемикання вкладок
  toggleView(view: string) {
    this.showTimer = view === 'timer';
    this.showStopwatch = view === 'stopwatch';
    this.isTabataVisible = view === 'tabata';
  }

  // Методи для Таймера
  startTimer() {
    if (this.timerInterval) return;
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
      } else {
        this.resetTimer();
        alert('Таймер завершено!');
      }
    }, 1000);
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.timerValue = 60;
  }

  // Методи для Секундоміра
  startStopwatch() {
    if (this.isStopwatchRunning) return;
    this.isStopwatchRunning = true;
    this.stopwatchInterval = setInterval(() => {
      this.stopwatchValue++;
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.isStopwatchRunning = false;
  }

  resetStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.stopwatchValue = 0;
    this.isStopwatchRunning = false;
  }

  // Методи для Табати
  startTabata() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.currentRound = 1;
    this.currentPhase = 'work';
    this.timerMessage = `00:${this.workDuration}`;
    this.runTabata();
  }

  runTabata() {
    let currentTime = this.currentPhase === 'work' ? this.workDuration : this.restDuration;

    this.tabataInterval = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        this.timerMessage = `00:${currentTime < 10 ? '0' + currentTime : currentTime}`;
      } else {
        clearInterval(this.tabataInterval);

        if (this.currentPhase === 'work') {
          this.currentPhase = 'rest';
          this.statusMessage = 'Відпочинок';
          this.runTabata();
        } else {
          if (this.currentRound < this.rounds) {
            this.currentRound++;
            this.currentPhase = 'work';
            this.statusMessage = 'Робота';
            this.runTabata();
          } else {
            this.resetTabata();
            alert('Табата завершена!');
          }
        }
      }
    }, 1000);
  }

  stopTabata() {
    clearInterval(this.tabataInterval);
    this.isRunning = false;
  }

  resetTabata() {
    clearInterval(this.tabataInterval);
    this.isRunning = false;
    this.statusMessage = 'Підготовка';
    this.timerMessage = '00:00';
    this.currentRound = 0;
  }
}
