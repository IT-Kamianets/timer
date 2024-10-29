import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Додай стиль, якщо потрібно
})
export class AppComponent {
  title = 'timer'; // Додайте цю рядок, щоб виправити помилку
  type: 'timer' | 'stopwatch' = 'timer';
}
