import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Додай стиль, якщо потрібно
})
export class AppComponent {
  type: 'timer' | 'stopwatch' = 'timer';
}
