'use strict';

/**
 * work-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-plan.work-plan');
