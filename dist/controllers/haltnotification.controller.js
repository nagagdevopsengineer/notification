"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaltnotificationController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HaltnotificationController = class HaltnotificationController {
    constructor(haltnotificationRepository) {
        this.haltnotificationRepository = haltnotificationRepository;
    }
    async create(haltnotification) {
        return this.haltnotificationRepository.create(haltnotification);
    }
    async count(where) {
        return this.haltnotificationRepository.count(where);
    }
    async find(filter) {
        return this.haltnotificationRepository.find(filter);
    }
    async updateAll(haltnotification, where) {
        return this.haltnotificationRepository.updateAll(haltnotification, where);
    }
    async findById(id, filter) {
        return this.haltnotificationRepository.findById(id, filter);
    }
    async updateById(id, haltnotification) {
        await this.haltnotificationRepository.updateById(id, haltnotification);
    }
    async replaceById(id, haltnotification) {
        await this.haltnotificationRepository.replaceById(id, haltnotification);
    }
    async deleteById(id) {
        await this.haltnotificationRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/haltnotifications'),
    (0, rest_1.response)(200, {
        description: 'Haltnotification model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification, {
                    title: 'NewHaltnotification',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/haltnotifications/count'),
    (0, rest_1.response)(200, {
        description: 'Haltnotification model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Haltnotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/haltnotifications'),
    (0, rest_1.response)(200, {
        description: 'Array of Haltnotification model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Haltnotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/haltnotifications'),
    (0, rest_1.response)(200, {
        description: 'Haltnotification PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Haltnotification)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Haltnotification, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/haltnotifications/{id}'),
    (0, rest_1.response)(200, {
        description: 'Haltnotification model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Haltnotification, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/haltnotifications/{id}'),
    (0, rest_1.response)(204, {
        description: 'Haltnotification PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Haltnotification, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Haltnotification]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/haltnotifications/{id}'),
    (0, rest_1.response)(204, {
        description: 'Haltnotification PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Haltnotification]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/haltnotifications/{id}'),
    (0, rest_1.response)(204, {
        description: 'Haltnotification DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], HaltnotificationController.prototype, "deleteById", null);
HaltnotificationController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HaltnotificationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HaltnotificationRepository])
], HaltnotificationController);
exports.HaltnotificationController = HaltnotificationController;
//# sourceMappingURL=haltnotification.controller.js.map