import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Haltnotification} from '../models';
import {HaltnotificationRepository} from '../repositories';

export class HaltnotificationController {
  constructor(
    @repository(HaltnotificationRepository)
    public haltnotificationRepository : HaltnotificationRepository,
  ) {}

  @post('/haltnotifications')
  @response(200, {
    description: 'Haltnotification model instance',
    content: {'application/json': {schema: getModelSchemaRef(Haltnotification)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Haltnotification, {
            title: 'NewHaltnotification',
            exclude: ['id'],
          }),
        },
      },
    })
    haltnotification: Omit<Haltnotification, 'id'>,
  ): Promise<Haltnotification> {
    return this.haltnotificationRepository.create(haltnotification);
  }

  @get('/haltnotifications/count')
  @response(200, {
    description: 'Haltnotification model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Haltnotification) where?: Where<Haltnotification>,
  ): Promise<Count> {
    return this.haltnotificationRepository.count(where);
  }

  @get('/haltnotifications')
  @response(200, {
    description: 'Array of Haltnotification model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Haltnotification, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Haltnotification) filter?: Filter<Haltnotification>,
  ): Promise<Haltnotification[]> {
    return this.haltnotificationRepository.find(filter);
  }

  @patch('/haltnotifications')
  @response(200, {
    description: 'Haltnotification PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Haltnotification, {partial: true}),
        },
      },
    })
    haltnotification: Haltnotification,
    @param.where(Haltnotification) where?: Where<Haltnotification>,
  ): Promise<Count> {
    return this.haltnotificationRepository.updateAll(haltnotification, where);
  }

  @get('/haltnotifications/{id}')
  @response(200, {
    description: 'Haltnotification model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Haltnotification, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Haltnotification, {exclude: 'where'}) filter?: FilterExcludingWhere<Haltnotification>
  ): Promise<Haltnotification> {
    return this.haltnotificationRepository.findById(id, filter);
  }

  @patch('/haltnotifications/{id}')
  @response(204, {
    description: 'Haltnotification PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Haltnotification, {partial: true}),
        },
      },
    })
    haltnotification: Haltnotification,
  ): Promise<void> {
    await this.haltnotificationRepository.updateById(id, haltnotification);
  }

  @put('/haltnotifications/{id}')
  @response(204, {
    description: 'Haltnotification PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() haltnotification: Haltnotification,
  ): Promise<void> {
    await this.haltnotificationRepository.replaceById(id, haltnotification);
  }

  @del('/haltnotifications/{id}')
  @response(204, {
    description: 'Haltnotification DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.haltnotificationRepository.deleteById(id);
  }
}
