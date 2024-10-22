import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Імпорт FormsModule
import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerComponent, FormsModule] // Додаємо FormsModule тут
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize display correctly', () => {
    component.hours = 1;
    component.minutes = 30;
    component.seconds = 45;
    component.ngOnInit(); // Викликаємо ngOnInit, щоб оновити display
    expect(component.display).toBe('01:30:45'); // Перевіряємо, чи правильно ініціалізується display
  });

  it('should start timer', () => {
    spyOn(window, 'alert'); // Мокування alert
    component.hours = 0;
    component.minutes = 0;
    component.seconds = 5; // Таймер на 5 секунд
    component.startTimer(); // Запускаємо таймер

    setTimeout(() => {
      expect(component.display).toBe('00:00:00'); // Таймер повинен зупинитися
      expect(window.alert).toHaveBeenCalledWith("Time's up!"); // Перевіряємо, чи сповіщення було показано
    }, 6000); // Чекаємо 6 секунд
  });
});
