import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'timeline-widget',
  templateUrl: './timeline-widget.component.html',
  styleUrls: ['./timeline-widget.component.css']
})
export class TimelineWidgetComponent implements OnInit {

  @Input() data: Array<["Name", "From", "To"]>;
  events: Array<any>;
  lines: Array<any> = [];

  constructor() { }

  ngOnInit() {
    let evnts = [
      { name: "עונת קיץ", start: new Date(2019, 6, 22), end: new Date(2019, 10, 9) },
      { name: "אבטיחים בשוק", start: new Date(2019, 5, 15), end: new Date(2019, 11, 12) },
      { name: "ים טוב לרחצה", start: new Date(2019, 8, 20), end: new Date(2019, 9, 3) }
    ];
    //calc borders
    let allDates = evnts.reduce((acc, val) => [...acc, val.start, val.end], []).sort((a, b) => a - b);
    let totalDays = moment(allDates[allDates.length - 1]).diff(allDates[0], 'd');

    //create grid lines
    let skipDays = totalDays <= 20 ? 1 : 7;
    for (let i = 0; i <= totalDays; i += skipDays) {
      this.lines.push(moment(allDates[0]).add(i, 'd').format('DD/MM'));
    }

    //remap events
    this.events = evnts.map(e => {
      return {
        name: e.name,
        days: moment(e.end).diff(e.start, 'd'),
        offset: moment(e.start).diff(allDates[0], 'd')
      }
    });


  }

}












