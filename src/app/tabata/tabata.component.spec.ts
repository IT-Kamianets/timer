import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabataComponent } from './tabata.component';

describe('TabataComponent', () => {
  let component: TabataComponent;
  let fixture: ComponentFixture<TabataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
