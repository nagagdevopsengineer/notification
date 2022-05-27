import { DefaultCrudRepository } from '@loopback/repository';
import { NotificationDataSource } from '../datasources';
import { Notification, NotificationRelations } from '../models';
export declare class NotificationRepository extends DefaultCrudRepository<Notification, typeof Notification.prototype.employeeId, NotificationRelations> {
    constructor(dataSource: NotificationDataSource);
}
