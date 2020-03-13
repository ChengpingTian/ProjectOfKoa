/**
 * ajax 服务路由集合
 */
const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/todo',controllers.todo)
module.exports = router
