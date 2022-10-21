import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'projectType' })
export class ProjectTypePipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            //project
            case 1: return "icon-lightbulb";
            //edition
            case 2: return "icon-tag";
            //bug
            case 3: return "icon-bug";
            //general
            default: return "icon-folder-empty";
        }
    }
}