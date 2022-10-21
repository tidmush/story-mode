import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FloatingSquareComponent } from './floating-square.component';

describe('FloatingSquareComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FloatingSquareComponent
      ],
    }).compileComponents();
  }));

  it('should create the floating-square', () => {
    const fixture = TestBed.createComponent(FloatingSquareComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
