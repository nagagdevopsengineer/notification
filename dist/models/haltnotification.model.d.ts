import { Entity } from '@loopback/repository';
export declare class Haltnotification extends Entity {
    tripid: number;
    id?: number;
    trip: object;
    busdetails?: string[];
    employee?: object[];
    [prop: string]: any;
    constructor(data?: Partial<Haltnotification>);
}
export interface HaltnotificationRelations {
}
export declare type HaltnotificationWithRelations = Haltnotification & HaltnotificationRelations;
