"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
};
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
let NotificationDataSource = class NotificationDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
NotificationDataSource.dataSourceName = 'Notification';
NotificationDataSource.defaultConfig = config;
NotificationDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Notification', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], NotificationDataSource);
exports.NotificationDataSource = NotificationDataSource;
//# sourceMappingURL=notification.datasource.js.map