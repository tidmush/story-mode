import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TodoComponent
      ],
    }).compileComponents();
  }));

  it('should create the todo', () => {
    const fixture = TestBed.createComponent(TodoComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
