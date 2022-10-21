import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { IMyDateModel } from 'mydatepicker';
import { WorkItemService } from '../../services/workItem.service';
import { WorkItem } from '../../models/workItem';
import { User } from '../../models/user';

@Component({
  selector: 'work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  editTitle: boolean;
  editDescription: boolean;
  todoFolded: boolean;
  isUserPickerOpened: boolean;
  newTodo: WorkItem;
  datePickerOptions = {
    isOpened: false,
    dateFormat: "DD/MM/YYYY",
    inline: true
  };
  @Input() workItem: WorkItem;
  @Input() projectId: number;
  @Output() progression = new EventEmitter();

  constructor(private workItemService: WorkItemService) { }

  ngOnInit() {
  }

  setText():void {
    this.editTitle = false;
    this.editDescription = false;
    this.saveWorkItem();
  }

  setDueDate(event: IMyDateModel) :void{
    this.workItem.dueDate = new Date(event.jsdate);
    this.datePickerOptions.isOpened = false;
    this.saveWorkItem();
  }

  setNextStatus():void {
    this.workItem.status = this.workItem.status === 4 ? 2 : this.workItem.status + 1;
    this.saveWorkItem();
  }

  setUser(user: User) :void{
    this.workItem.owner = user.name;
    this.isUserPickerOpened = false;
    this.saveWorkItem();
  }
  addTodo(todo: WorkItem):void {
    this.workItem.workItems.push(todo);
    this.newTodo = new WorkItem();
    this.progression.emit();
  }
  updateTodo():void {
    this.progression.emit();
  }

  saveWorkItem():void {
    this.workItemService.updateWorkItem(this.workItem, this.projectId)
      .subscribe(workItem => this.workItem = { ...this.workItem, ...workItem });
  }
}












