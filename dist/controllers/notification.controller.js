"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
const rest_1 = require("@loopback/rest");
const axios = require('axios');
class NotificationController {
    constructor() { }
    async getNotification(app_id) {
        return app_id;
    }
    async createNotification() {
        return "Hello WOrld";
    }
}
tslib_1.__decorate([
    (0, rest_1.get)('/notifications'),
    tslib_1.__param(0, rest_1.param.query.string('app_id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotification", null);
tslib_1.__decorate([
    (0, rest_1.post)('/notifications'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map