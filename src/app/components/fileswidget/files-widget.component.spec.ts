import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilesWidgetComponent } from './files-widget.component';

describe('FilesWidgetComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FilesWidgetComponent
      ],
    }).compileComponents();
  }));

  it('should create the files  widget', () => {
    const fixture = TestBed.createComponent(FilesWidgetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
