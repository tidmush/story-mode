import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { ProjectService } from '../../services/project.service';
import { WorkItemService } from '../../services/workItem.service';
import { Project } from '../../models/project';
import { WorkItem } from '../../models/workItem';

@Component({
  selector: 'project-view',
  templateUrl: './projectview.component.html',
  styleUrls: ['./projectview.component.css']
})
export class ProjectViewComponent implements OnInit {
  project: Project;
  selectedWidget: string;
  calEvents: Array<CalendarEvent<WorkItem>>;
  timelineData: Array<any>;
  widgetsFolded: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService, private workItemService: WorkItemService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (!this.project || this.project.id !== +routeParams.id)
        this.projectService.getProject(+routeParams.id)
          .subscribe(project => {
            if (project)
              this.project = project;
            else
              this.router.navigate(["/"]);
          });
    });
    this.selectedWidget = '';
  }


  onSelectWidget(widget: string): void {
    this.selectedWidget = widget;
    switch (widget) {
      case "calendar":
        this.populateCalendarEvents();
        break;
      case "timeline":
        this.populateTimelineData();
        break;
    }
  }


  populateCalendarEvents(): void {
    this.calEvents = this.project.workItems
      .map(item => {
        return {
          title: item.title,
          start: item.dueDate,
          color: {
            primary: "#4EA6DC",
            secondary: "#DCEDF8"
          },
          allDay: true,
          item
        }
      });
  }

  populateTimelineData(): void {
    let data = this.project.workItems
      .map(item => [item.title, new Date(item.startDate), item.dueDate]);
    this.timelineData = [["Name", "From", "To"], ...data];
  }

  addWorkItem(): void {
    let workItem: WorkItem = { title: "כותרת", description: "תיאור", type: 1, startDate: new Date(), dueDate: new Date(), owner: "יותם", status: 1, done: false, };
    this.workItemService.createWorkItem(workItem, this.project.id)
      .subscribe(workItem => this.project.workItems.unshift(workItem));
  }

  updateProgress(): void {
    let todos = this.project
      .workItems.map(item => item.workItems)
      .reduce((a, b) => a.concat(b));

    this.project.progress = todos.filter(todo => todo.done).length * 100 / todos.length;
    this.projectService.updateProject(this.project);
    this.projectService.updateProgress({ key: this.project.id, value: this.project.progress });
  }
}
