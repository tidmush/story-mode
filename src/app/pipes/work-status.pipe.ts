import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class WorkStatusPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1: return "חדש";
            case 2: return "בפיתוח";
            case 3: return "בבדיקות";
            case 4: return "אושר";
            default: return "";
        }
    }
}