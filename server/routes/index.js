/**
 * ajax 服务路由集合
 */
const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/',controllers.todo)
router.post('/addartype', controllers.addartype)
router.get('/aticaltypelist', controllers.aticaltypelist)

module.exports = router
