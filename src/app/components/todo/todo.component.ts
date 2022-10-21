import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { WorkItem } from '../../models/workItem';
import { WorkItemService } from '../../services/workItem.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: WorkItem;
  @Input() workItemId: number;
  @Input() projectId: number;
  @Output() todoChanged = new EventEmitter<WorkItem>();

  constructor(private workItemService: WorkItemService) { }

  ngOnInit() {
    if (!this.todo) {
      this.todo = new WorkItem();
    }
  }

  saveTodo(): void {
    this.todo.done = this.todo.id && !this.todo.done;
    let promise = this.todo.id ? this.workItemService.updateTodo(this.todo, this.workItemId, this.projectId) :
      this.workItemService.createTodo(this.todo, this.workItemId, this.projectId);
    promise.subscribe(todo => {
      this.todo = { ...this.todo, ...todo };
      this.todoChanged.emit({ ...this.todo});
    });
  }
}












