import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserPickerComponent } from './user-picker.component';

describe('UserPickerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserPickerComponent
      ],
    }).compileComponents();
  }));

  it('should create the user-picker', () => {
    const fixture = TestBed.createComponent(UserPickerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
