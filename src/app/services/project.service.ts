import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { KeyValue } from '@angular/common';
import { environment } from '../../environments/environment';
import { Project } from '../models/project';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    private progressSource = new Subject<KeyValue<number, number>>();
    progressUpdated$ = this.progressSource.asObservable();
    constructor(private http: HttpClient, private toastr: ToastrService) { }

    updateProgress(progress: KeyValue<number, number>): void {
        this.progressSource.next(progress);
    }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${environment.api}/projects`)
            .pipe(catchError(this.handleError<Project[]>('getProjects', [])));
    }

    getProject(id: number): Observable<Project> {
        return this.http.get<Project>(`${environment.api}/projects/${id}`)
            .pipe(catchError(this.handleError<Project>('getProject', null)));
    }

    createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(`${environment.api}/projects/`, project)
            .pipe(
                tap(_ => this.toastr.success(`פרוייקט ${project.name} נוצר בהצלחה`)),
                catchError(this.handleError<Project>('createProject', null))
            );
    }

    updateProject(project: Project): Observable<Project> {
        return this.http.put<Project>(`${environment.api}/projects/${project.id}`, project)
            .pipe(
                tap(_ => this.toastr.success(`פרוייקט ${project.name} עודכן בהצלחה`)),
                catchError(this.handleError<Project>('updateProject', null))
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