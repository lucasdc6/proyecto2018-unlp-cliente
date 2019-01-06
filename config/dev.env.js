'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: process.env.API_URL ? process.env.API_URL : 'https://virtserver.swaggerhub.com/lucasdc6/Proyecto2018/1.0.0/',
});
