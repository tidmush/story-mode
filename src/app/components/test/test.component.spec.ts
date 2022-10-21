import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestViewComponent } from './test.component';

describe('TaskViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', () => {
    const fixture = TestBed.createComponent(TestViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
