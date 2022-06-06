import { Notification } from "../models";
import { NotificationRepository } from "../repositories";
export declare class NotificationController {
    notificationRepository: NotificationRepository;
    NotificationRepository: any;
    constructor(notificationRepository: NotificationRepository);
    create(notification: Omit<Notification, "id">): Promise<Notification>;
    createNotifications(playerIds: []): Promise<any>;
    find(employeeId: string, newDate: string): Promise<Notification[]>;
}
