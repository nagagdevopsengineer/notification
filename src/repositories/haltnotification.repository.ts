import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HaltDataSource} from '../datasources';
import {Haltnotification, HaltnotificationRelations} from '../models';

export class HaltnotificationRepository extends DefaultCrudRepository<
  Haltnotification,
  typeof Haltnotification.prototype.id,
  HaltnotificationRelations
> {
  constructor(
    @inject('datasources.halt') dataSource: HaltDataSource,
  ) {
    super(Haltnotification, dataSource);
  }
}
