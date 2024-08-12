const bookModel=require('../models/bookModel')
const commentModel = require('../models/commentModel')
const asyncHandler = require('../utils/asyncHandler')

const getAllBooks=asyncHandler(async(req,res)=>{

    const allBooks=await   bookModel.find()

    res.render("home.ejs",{books:allBooks})
   })
   
const getSingleBook=asyncHandler(async(req,res)=>{

    const book=await  bookModel.findById(req.params.id).populate("comments")

    console.log(book);
    
    res.render("book",{book})
   })

module.exports={getAllBooks,getSingleBook}