const { getAllBooks, getSingleBook } = require('../controllers/bookControllers')

const bookrouter=require('express').Router()
bookrouter.get('/',getAllBooks)
bookrouter.get('/:id',getSingleBook)



module.exports=bookrouter