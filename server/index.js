const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const cors = require("koa2-cors");
const { connect, initSchemas } = require("./dbs/dbs.init");

(async () => {
    await connect();
    initSchemas();
})()
app.use(cors());
app.use(bodyParser());
// 引入路由分发
const router = require('./routes')
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log('starting at port 3000');
});