const asyncHandler = require('../utils/asyncHandler')

const commentModel=require('../models/commentModel')
const bookModel = require('../models/bookModel')

const newComment=asyncHandler(async(req,res)=>{
   const book=req.params.id
   const com=await commentModel.create({...req.body})
   await bookModel.updateOne({_id:req.params.id},{$push:{comments:com._id}})
   res.redirect(`/books/${book}`)
   })

   module.exports=newComment