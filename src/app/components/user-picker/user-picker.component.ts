import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.css']
})
export class UserPickerComponent implements OnInit {

  constructor(private userService: UserService) { }
  private query = new Subject<string>();
  users$: Observable<User[]>;
  @Output() userSelected = new EventEmitter<User>();

  ngOnInit() {
    this.users$ = this.query.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((q: string) => this.userService.getUsers(q))
    );
  }

  filter(q: string): void {
    this.query.next(q);
  }

  selectUser(user: User): void {
    this.userSelected.emit(user);
  }

}












