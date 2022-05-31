"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
const repository_1 = require("@loopback/repository");
const dotenv = require("dotenv").config();
const rest_1 = require("@loopback/rest");
const axios = require("axios");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NotificationController = class NotificationController {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    //Notification for singal object
    async create(notification) {
        console.log(notification.playerid, 'pp');
        if (notification.playerid !== null) {
            const onesignaldata = {
                app_id: process.env.ONESIGNAL_APPID,
                include_player_ids: [notification.playerid],
                contents: { en: "Succefully boarded " },
            };
            console.log(onesignaldata);
            axios
                .post(`${process.env.ONESIGNAL_API}/notifications`, onesignaldata, {
                headers: {
                    Authorization: "Basic NDUxM2FkYmEtNDgxMS00OGI2LWE2YWUtNzE2Y2Q3NDZlMmJj",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                console.log("Notification sent successfully.");
            })
                .catch((err) => {
                console.log(err);
            });
        }
        return this.notificationRepository.create(notification);
    }
    // Notification for array of objects
    async createNotifications(playerIds) {
        let ids = [];
        console.log(playerIds, "PalyerIDs");
        playerIds.map((player) => {
            if (player.playerid !== null) {
                ids.push(player.playerid);
            }
        });
        const appId = process.env.ONESIGNAL_APPID;
        console.log(process.env.ONESIGNAL_APPID);
        const onesignaldata = {
            app_id: process.env.ONESIGNAL_APPID,
            include_player_ids: ids,
            contents: { en: "Your trip has started" },
        };
        console.log(onesignaldata, 'one');
        axios
            .post(`${process.env.ONESIGNAL_API}/notifications`, onesignaldata, {
            headers: {
                Authorization: "Basic NDUxM2FkYmEtNDgxMS00OGI2LWE2YWUtNzE2Y2Q3NDZlMmJj",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
            console.log("Notification sent successfully.");
        })
            .catch((err) => {
            console.log(err);
        });
        return this.notificationRepository.createAll(playerIds);
    }
    async find(employeeId) {
        let res = await this.notificationRepository.find({ where: { employeeId: employeeId } });
        return res;
    }
};
tslib_1.__decorate([
    (0, rest_1.post)("/notification"),
    (0, rest_1.response)(200, {
        description: "Notification sent successfully",
        content: {
            "application/json": { schema: (0, rest_1.getModelSchemaRef)(models_1.Notification) },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Notification, {
                    title: "NewNotification",
                    exclude: ["id"],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.post)("/bulknotifications"),
    (0, rest_1.response)(200, {
        description: "Notification sent successfully",
        content: {
            "application/json": { schema: (0, rest_1.getModelSchemaRef)(models_1.Notification) },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            "application/json": {},
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotifications", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notifications'),
    (0, rest_1.response)(200, {
        description: 'Array of Vehiclelocation model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Notification, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('employeeId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificationController.prototype, "find", null);
NotificationController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.NotificationRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.NotificationRepository])
], NotificationController);
exports.NotificationController = NotificationController;
function include_player_ids(include_player_ids) {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=notification.controller.js.map