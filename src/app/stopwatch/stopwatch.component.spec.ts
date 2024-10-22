import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StopwatchComponent } from './stopwatch.component';
import { CommonModule } from '@angular/common'; // Імпортуємо CommonModule для використання стандартних директив Angular

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, StopwatchComponent] // Додаємо CommonModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
