import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.css']
})
export class CalendarWidgetComponent implements OnInit {

  viewDate: Date;
  @Input() events: Array<CalendarEvent<any>>;
  constructor() { }

  ngOnInit() {
    this.viewDate = new Date();
  }

}












