import { WorkItem } from './workItem';

export class Project {
    id?: number;
    name: string;
    progress: number;
    type: number;
    workItems?: WorkItem[];
}