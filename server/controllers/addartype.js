const mongoose = require('mongoose')

module.exports = async (ctx) => {

    const ArticleType = mongoose.model('ArticleType')
    let params = ctx.request.body;

    let atype = new ArticleType({
        TypeName: params.data.title
    })

    let result = await ArticleType.findOne({TypeName: params.data.title })
    var datalist = []
    if (result) {
        datalist.push(result)
    }
    if (datalist.length > 0) {
        ctx.body = {
            state: 3,
            message: '数据已存在'
        }
    } else {
        let res = await atype.save()
        if (res) {
            ctx.body = {
                state: 0,
                message: '新增成功'
            }
        }

    }





}