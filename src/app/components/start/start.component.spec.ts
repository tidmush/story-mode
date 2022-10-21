import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartComponent } from './start.component';

describe('StartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StartComponent
      ],
    }).compileComponents();
  }));

  it('should create the start', () => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
