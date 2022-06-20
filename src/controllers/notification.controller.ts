// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from "@loopback/repository";
const dotenv = require("dotenv").config();

import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from "@loopback/rest";

const axios = require("axios");
import { Notification } from "../models";
import { NotificationRepository } from "../repositories";

export class NotificationController {
  NotificationRepository: any;
  constructor(
    @repository(NotificationRepository)
    public notificationRepository: NotificationRepository
  ) {}

  //Notification for singal object
  @post("/notification")
  @response(200, {
    description: "Notification sent successfully",
    content: {
      "application/json": { schema: getModelSchemaRef(Notification) },
    },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Notification, {
            title: "NewNotification",
            exclude: ["id"],
          }),
        },
      },
    })
    notification: Omit<Notification, "id">
  ): Promise<Notification> {
    console.log(notification.playerid,'pp')
    if(notification.playerid!==null){
      const onesignaldata = {
        app_id: process.env.ONESIGNAL_APPID,
        include_player_ids: [notification.playerid],
        contents: { en: "Succefully boarded " },
      };
      console.log(onesignaldata)
      axios
      .post(`${process.env.ONESIGNAL_API}/notifications`, onesignaldata, {
        headers: {
          Authorization:
            "Basic NDUxM2FkYmEtNDgxMS00OGI2LWE2YWUtNzE2Y2Q3NDZlMmJj",
          "Content-Type": "application/json",
        },
      })
      .then((res: any) => {
        console.log("Notification sent successfully.");
      })
      .catch((err: any) => {
        console.log(err);
      });
    }
    
    
    return this.notificationRepository.create(notification);
  }

  // Notification for array of objects
  @post("/bulknotifications")
  @response(200, {
    description: "Notification sent successfully",
    content: {
      "application/json": { schema: getModelSchemaRef(Notification) },
    },
  })
  async createNotifications(
    @requestBody({
      content: {
        "application/json": {},
      },
    })
    playerIds: any[]=[]
  ): Promise<any> {
    let ids: any[] = [];
    console.log(playerIds, "PalyerIDs");
    playerIds.map((player: any) => {
      if (player.playerid !== null) {
        ids.push(player.playerid);
      }
    });
    const appId = process.env.ONESIGNAL_APPID;
    console.log(process.env.ONESIGNAL_APPID);
    const onesignaldata = {
      app_id: process.env.ONESIGNAL_APPID,
      include_player_ids: ids,
      // contents: { en: "Your trip has started" },
        contents:  {en :  playerIds[0].contenttype} ,
    };
    console.log(onesignaldata,'one')
    axios
      .post(`${process.env.ONESIGNAL_API}/notifications`, onesignaldata, {
        headers: {
          Authorization:
            "Basic NDUxM2FkYmEtNDgxMS00OGI2LWE2YWUtNzE2Y2Q3NDZlMmJj",
          "Content-Type": "application/json",
        },
      })
      .then((res: any) => {
        console.log("Notification sent successfully.");
      })
      .catch((err: any) => {
        console.log(err);
      });

    return this.notificationRepository.createAll(playerIds);
  }
 
  @get('/notifications')
  @response(200, {
    description: 'Array of Vehiclelocation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Notification, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.query.string('employeeId') employeeId: string,
    // @param.filter(Notification) filter?: Filter<Notification>,
  ): Promise<Notification[]> {
    let res = await this.notificationRepository.find({where:{employeeId: employeeId}});
     return res
  }
}

function include_player_ids(include_player_ids: any) {
  throw new Error("Function not implemented.");
}
