const mongoose = require('mongoose')

module.exports = async (ctx) => {

    const User = mongoose.model('User')
    
   
    let users = await User.findOne({}).exec()
    console.log(users.age)

    //成功返回code=200，并返回成功信息
    ctx.body = {
        code: 200,
        age: users,
        message: '注册成功'
    }


}

