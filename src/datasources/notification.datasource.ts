import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'notification',
  connector: 'mongodb',
  url: '',
  host: '65.0.139.196',
  port: 27017,
  user: 'trackingapp',
  password: 'arrivnow123',
  database: 'tracking',
  useNewUrlParser: true,
  // tls: true,
  // tlsCertificateKeyFile: '/System/Volume/Data/data/notification',
  // tlsCAFile: '/System/Volume/Data/data/notification',
}
// const config = {
//   name: 'Notification',
//   connector: 'mongodb',
//   url: '',
//   host: '65.0.139.196',
//   port: 27017,
//   user: 'notificationapp',
//   password: 'notification',
//   database: 'notificationapp',

//   useNewUrlParser: true
// };
// const config = {
//   name: 'tracking',
//   connector: 'mongodb',
//   url: '',
//   host: '65.0.139.196',
//   port: 27017,
//   user: 'trackingapp',
//   password: 'arrivnow123',
//   database: 'tracking',
//   useNewUrlParser: true,
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NotificationDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Notification';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Notification', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
