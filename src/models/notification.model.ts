import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Notification extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  notificationId?: number;

  @property({
    type: 'string',
  })
  notificationtype?: string;

  @property({
    type: 'string',
    required: true,
  })
  employeeId: string;

  @property({
    type: 'string',
  })
  contenttype?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Notification>) {
    super(data);
  }
}

export interface NotificationRelations {
  // describe navigational properties here
}

export type NotificationWithRelations = Notification & NotificationRelations;
