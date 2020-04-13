const mongoose = require('mongoose') //引入Mongoose
const Schema = mongoose.Schema //声明Schema
let ObjectId = Schema.Types.ObjectId //声明Object类型

//创建我们的用户Schema
const ArticleTypeSchema = new Schema({
    TypeName: {
        unique: true,
        type: String
    }
})

//发布模型
mongoose.model('ArticleType', ArticleTypeSchema)