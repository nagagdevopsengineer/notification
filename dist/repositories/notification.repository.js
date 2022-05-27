"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let NotificationRepository = class NotificationRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Notification, dataSource);
    }
};
NotificationRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.Notification')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.NotificationDataSource])
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=notification.repository.js.map