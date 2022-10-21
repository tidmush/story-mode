import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    getUsers(q: string): Observable<User[]> {
        return this.http.get<User[]>(`${environment.api}/users?q=${q}`)
            .pipe(catchError(this.handleError<User[]>('getUsers', [])));
    }

    getUser(): Observable<User> {
        return this.http.get<User>(`${environment.api}/users/0`)
            .pipe(catchError(this.handleError<User>('getUser', null)));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.toastr.error(`שירות ${operation} נכשל, יש לנסות שנית או ליצור קשר עם יותם`);
            return of(result as T);
        };
    }

}