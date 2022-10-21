import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({ name: 'avatar' })
export class AvatarPipe implements PipeTransform {
    transform(value: string): string {
       return `${environment.avatarUrl}${value}`;
    }
}