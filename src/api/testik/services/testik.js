'use strict';

/**
 * testik service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testik.testik');
