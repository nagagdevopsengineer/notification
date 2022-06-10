"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Haltnotification = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Haltnotification = class Haltnotification extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Haltnotification.prototype, "tripid", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Haltnotification.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Object)
], Haltnotification.prototype, "trip", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
    }),
    tslib_1.__metadata("design:type", Array)
], Haltnotification.prototype, "busdetails", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
    }),
    tslib_1.__metadata("design:type", Array)
], Haltnotification.prototype, "employee", void 0);
Haltnotification = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Haltnotification);
exports.Haltnotification = Haltnotification;
//# sourceMappingURL=haltnotification.model.js.map