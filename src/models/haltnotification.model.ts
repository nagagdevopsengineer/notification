import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Haltnotification extends Entity {
  @property({
    type: 'number',
    
  })
  tripid: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
   
  })
  trip: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  busdetails?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  employee?: object[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Haltnotification>) {
    super(data);
  }
}

export interface HaltnotificationRelations {
  // describe navigational properties here
}

export type HaltnotificationWithRelations = Haltnotification & HaltnotificationRelations;
