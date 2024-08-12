const {model,Schema, Types}=require('mongoose')


const bookSchema=new Schema({
    title:{type:String,required:[true,"title is required"],unique:[true,"title must be unique"]},
    author:{type:String,required:[true,"author is required"]},
    pages:Number,
    price:Number,
    comments:[{type:Types.ObjectId,ref:"comment"}]
  
  
})

const bookModel=new model('book',bookSchema)
module.exports=bookModel