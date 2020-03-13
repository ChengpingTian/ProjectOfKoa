
module.exports = async (ctx) => {
   
    let {
        user, age
    } = ctx.query;
   

    ctx.body = {
        
        user, age
       
    }

}
