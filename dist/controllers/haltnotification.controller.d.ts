import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Haltnotification } from '../models';
import { HaltnotificationRepository } from '../repositories';
export declare class HaltnotificationController {
    haltnotificationRepository: HaltnotificationRepository;
    constructor(haltnotificationRepository: HaltnotificationRepository);
    create(haltnotification: Omit<Haltnotification, 'id'>): Promise<Haltnotification>;
    count(where?: Where<Haltnotification>): Promise<Count>;
    find(filter?: Filter<Haltnotification>): Promise<Haltnotification[]>;
    updateAll(haltnotification: Haltnotification, where?: Where<Haltnotification>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Haltnotification>): Promise<Haltnotification>;
    updateById(id: number, haltnotification: Haltnotification): Promise<void>;
    replaceById(id: number, haltnotification: Haltnotification): Promise<void>;
    deleteById(id: number): Promise<void>;
}
