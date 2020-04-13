const mongoose = require('mongoose')

module.exports = async (ctx) => {

    const ArticleType = mongoose.model('ArticleType')
    let result = await ArticleType.find({})
   ctx.body ={
       date:0,
       list:result
   }
    
  





}