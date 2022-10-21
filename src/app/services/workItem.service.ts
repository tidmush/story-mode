import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { WorkItem } from '../models/workItem';

@Injectable({ providedIn: 'root' })
export class WorkItemService {

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    createWorkItem(workItem: WorkItem, projectId: number): Observable<WorkItem> {
        return this.http.post<WorkItem>(`${environment.api}/projects/${projectId}/workitems`, workItem)
            .pipe(
                tap(_ => this.toastr.success(`משימה ${workItem.title} נוצרה בהצלחה`)),
                catchError(this.handleError<WorkItem>('createWorkItem', null))
            );
    }

    updateWorkItem(workItem: WorkItem, projectId: number): Observable<WorkItem> {
        return this.http.put<WorkItem>(`${environment.api}/projects/${projectId}/workitems/${workItem.id}`, workItem)
            .pipe(
                tap(_ => this.toastr.success(`משימה ${workItem.title} עודכנה בהצלחה`)),
                catchError(this.handleError<WorkItem>('updateWorkItem', null))
            );
    }

    createTodo(todo: WorkItem, workItemId: number, projectId: number): Observable<WorkItem> {
        return this.http.post<WorkItem>(`${environment.api}/projects/${projectId}/workitems/${workItemId}/todos`, todo)
            .pipe(
                tap(_ => this.toastr.success(`תת משימה נוצרה בהצלחה`)),
                catchError(this.handleError<WorkItem>('createTodo', null))
            );
    }

    updateTodo(todo: WorkItem, workItemId: number, projectId: number): Observable<WorkItem> {
        return this.http.put<WorkItem>(`${environment.api}/projects/${projectId}/workitems/${workItemId}/todos/${todo.id}`, todo)
            .pipe(
                tap(_ => this.toastr.success(`תת משימה עודכנה בהצלחה`)),
                catchError(this.handleError<WorkItem>('updateTodo', null))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.toastr.error(`שירות ${operation} נכשל, יש לנסות שנית או ליצור קשר עם יותם`);
            return of(result as T);
        };
    }

}