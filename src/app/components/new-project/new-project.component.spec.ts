import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewProjectComponent } from './new-project.component';

describe('NewProjectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NewProjectComponent
      ],
    }).compileComponents();
  }));

  it('should create the new project', () => {
    const fixture = TestBed.createComponent(NewProjectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
