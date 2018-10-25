'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 配置开发环境url
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
