import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarWidgetComponent } from './calendar-widget.component';

describe('CalendarWidgetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CalendarWidgetComponent
      ],
    }).compileComponents();
  }));

  it('should create the calendar widget', () => {
    const fixture = TestBed.createComponent(CalendarWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
