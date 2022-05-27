import { Entity } from '@loopback/repository';
export declare class Notification extends Entity {
    name: string;
    notificationId?: number;
    notificationtype?: string;
    employeeId: string;
    contenttype?: string;
    [prop: string]: any;
    constructor(data?: Partial<Notification>);
}
export interface NotificationRelations {
}
export declare type NotificationWithRelations = Notification & NotificationRelations;
