// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response
} from '@loopback/rest';

const axios = require('axios');

export class NotificationController {
  constructor() {}

  @get('/notifications')
  async getNotification(
    @param.query.string('app_id') app_id: string,
  ) {
    return app_id
  }

  @post('/notifications')
  async createNotification() {
    return "Hello WOrld"
  }
}
