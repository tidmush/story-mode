import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppCalendarModule } from './app-calendar.module';
import { MomentModule } from 'ngx-moment';
import { MyDatePickerModule } from 'mydatepicker';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProjectViewComponent } from './components/projectview/projectview.component';
import { StartComponent } from './components/start/start.component';
import { CalendarWidgetComponent } from './components/calendarwidget/calendar-widget.component';
import { TimelineWidgetComponent } from './components/timelinewidget/timeline-widget.component';
import { FilesWidgetComponent } from './components/fileswidget/files-widget.component';
import { BugsWidgetComponent } from './components/bugswidget/bugs-widget.component';
import { WorkItemComponent } from './components/workitem/work-item.component';
import { TodoComponent } from './components/todo/todo.component';
import { FloatingSquareComponent } from './components/floatingsquare/floating-square.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { UserPickerComponent } from './components/user-picker/user-picker.component';
import { TestViewComponent } from './components/test/test.component';

import { WorkStatusPipe } from './pipes/work-status.pipe';
import { ProjectTypePipe } from './pipes/project-type.pipe';
import { WorkStatusColorPipe } from './pipes/work-status-color.pipe';
import { AvatarPipe } from './pipes/avatar.pipe';

import { HttpCredsInterceptor } from './interceptors/http-creds.interceptor';

import { ProjectService } from './services/project.service';
import { WorkItemService } from './services/workItem.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    TestViewComponent,
    AppComponent,
    SidebarComponent,
    ProjectViewComponent,
    StartComponent,
    CalendarWidgetComponent,
    TimelineWidgetComponent,
    FilesWidgetComponent,
    BugsWidgetComponent,
    WorkItemComponent,
    TodoComponent,
    FloatingSquareComponent,
    NewProjectComponent,
    UserPickerComponent,
    WorkStatusPipe,
    ProjectTypePipe,
    WorkStatusColorPipe,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgScrollbarModule,
    AppCalendarModule,
    Ng2GoogleChartsModule,
    MomentModule,
    ToastrModule.forRoot({ maxOpened: 1, autoDismiss: true, positionClass: 'toast-bottom-center' }),
    MyDatePickerModule
  ],
  providers: [
    ProjectService,
    WorkItemService,
    UserService,
    [
      { provide: HTTP_INTERCEPTORS, useClass: HttpCredsInterceptor, multi: true }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
