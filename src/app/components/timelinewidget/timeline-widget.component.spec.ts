import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TimelineWidgetComponent } from './timeline-widget.component';

describe('TimelineWidgetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TimelineWidgetComponent
      ],
    }).compileComponents();
  }));

  it('should create the timeline widget', () => {
    const fixture = TestBed.createComponent(TimelineWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
