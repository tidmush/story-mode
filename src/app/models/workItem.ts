export class WorkItem {
    id?: number;
    type:number;
    startDate:Date;
    dueDate: Date;
    title?: string;
    description?: string;
    owner: string;
    status: number;
    done: boolean;
    workItems?: WorkItem[];
}