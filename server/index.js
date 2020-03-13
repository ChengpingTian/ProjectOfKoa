const Koa = require('koa');
const app = new Koa();


// 引入路由分发
const router = require('./routes')
app.use(router.routes())
app.use(router.allowedMethods())

// router.get('/', function (ctx, next) {
//     ctx.body = "Hello JSPang";
// });

// router.get('/todo',(ctx,next)=>{
//     ctx.body = '做点啥'
// })

// app
//     .use(router.routes())
//     .use(router.allowedMethods());
app.listen(3000, () => {
    console.log('starting at port 3000');
});