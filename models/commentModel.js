const {model,Schema,Types}=require('mongoose')

const commentSchema=new Schema({
    user:String,
    comment:String,
  
})

module.exports=new model('comment',commentSchema)