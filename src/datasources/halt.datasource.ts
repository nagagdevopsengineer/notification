import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'halt',
  connector: 'mongodb',
  url: '',
  host: '3.111.104.11',
  port: 27017,
  user: 'trackingapp',
  password: 'arrivnow123',
  database: 'tracking',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HaltDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'halt';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.halt', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
