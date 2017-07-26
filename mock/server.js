const app = require('koa')();
const router = require('koa-router')();

// 首页 —— 广告（超值特惠）
const homeAdData = require('./ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});



// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
