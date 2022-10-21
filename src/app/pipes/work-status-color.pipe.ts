import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusColor' })
export class WorkStatusColorPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 2: return "#C830CC";
            case 3: return "#E32D91";
            case 4: return "#4EA6DC";
            default: return "#DCEDF8";
        }
    }
}