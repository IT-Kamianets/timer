import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabata',
  templateUrl: './tabata.component.html',
  styleUrls: ['./tabata.component.css']
})
export class TabataComponent implements OnInit {
  tabataDuration: number = 20; // Duration for work in seconds
  restDuration: number = 10;   // Duration for rest in seconds
  rounds: number = 8;          // Number of rounds
  isRunning: boolean = false;
  currentRound: number = 0;
  currentTime: number = 0;
  isWorkPhase: boolean = true; // Flag to indicate work phase or rest phase
  statusMessage: string = '';
  interval: any;

  showSettings: boolean = true; // To toggle the visibility of the settings
  currentPhase: string = ''; // To store the current phase (work or rest)
  remainingTime: number = 0; // Remaining time for the current phase
  lastUpdateTime: number = 0; // Time of the last update for precision

  // Declare the audio outside methods for re-use
  private beepSound!: HTMLAudioElement;

  ngOnInit(): void {
    // Initialize the beep sound once when the component is initialized
    this.beepSound = new Audio('assets/beep.mp3');
    this.beepSound.preload = 'auto'; // Ensure the sound is preloaded for better performance
  }

  startTabata() {
    this.showSettings = false; // Hide the settings when starting the Tabata
    this.isRunning = true;
    this.currentRound = 1;
    this.startRound();
  }

  startRound() {
    this.isWorkPhase = true;
    this.currentPhase = `Раунд ${this.currentRound}: Працюємо!`;
    this.remainingTime = this.tabataDuration;

    // Start countdown for the work phase
    this.lastUpdateTime = Date.now();
    this.updateTime();
  }

  updateTime() {
    if (this.remainingTime <= 0) {
      this.playSound(); // Play sound when time is up
      if (this.isWorkPhase) {
        this.switchToRest();
      } else {
        this.nextRound();
      }
    } else {
      const now = Date.now();
      const delta = (now - this.lastUpdateTime) / 1000; // Time difference in seconds

      if (delta >= 1) {
        this.remainingTime--; // Decrease the remaining time
        this.lastUpdateTime = now;
      }

      requestAnimationFrame(() => this.updateTime()); // Keep updating the time
    }
  }

  switchToRest() {
    this.isWorkPhase = false;
    this.currentPhase = `Раунд ${this.currentRound}: Відпочинок!`;
    this.remainingTime = this.restDuration;
    this.playSound(); // Play sound at the end of the work phase
    this.lastUpdateTime = Date.now();
    this.updateTime(); // Start countdown for the rest phase
  }

  nextRound() {
    if (this.currentRound < this.rounds) {
      this.currentRound++;
      this.startRound(); // Start the next round
    } else {
      this.stopTabata(); // Stop when all rounds are complete
    }
  }

  stopTabata() {
    this.isRunning = false;
    this.statusMessage = `Табата завершена!`;
    this.showSettings = true; // Show settings again when Tabata is stopped
    this.stopSound(); // Ensure the sound stops if it's still playing
  }

  playSound() {
    // Ensure the sound starts from the beginning each time
    this.beepSound.currentTime = 0;
    this.beepSound.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
  }

  stopSound() {
    // Stop the sound if it's still playing
    this.beepSound.pause();
    this.beepSound.currentTime = 0; // Reset sound to start position
  }
}
