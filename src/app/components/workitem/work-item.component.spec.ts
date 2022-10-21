import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkItemComponent } from './work-item.component';

describe('WorkItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        WorkItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the work-item', () => {
    const fixture = TestBed.createComponent(WorkItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
