import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NotificationDataSource} from '../datasources';
import {Notification, NotificationRelations} from '../models';

export class NotificationRepository extends DefaultCrudRepository<
  Notification,
  typeof Notification.prototype.employeeId,
  NotificationRelations
> {
  constructor(
    @inject('datasources.Notification') dataSource: NotificationDataSource,
  ) {
    super(Notification, dataSource);
  }
}
