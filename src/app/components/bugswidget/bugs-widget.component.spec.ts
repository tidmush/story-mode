import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BugsWidgetComponent } from './bugs-widget.component';

describe('BugsWidgetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BugsWidgetComponent
      ],
    }).compileComponents();
  }));

  it('should create the bugs widget', () => {
    const fixture = TestBed.createComponent(BugsWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
