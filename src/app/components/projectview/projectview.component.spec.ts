import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectViewComponent } from './projectview.component';

describe('TaskViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectViewComponent
      ],
    }).compileComponents();
  }));

  it('should create the projectview', () => {
    const fixture = TestBed.createComponent(ProjectViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
