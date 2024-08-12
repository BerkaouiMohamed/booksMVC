const express=require('express')
const newComment = require('./controllers/commentControllers')
const bookrouter = require('./router/bookRouter')
require('dotenv').config()


const app=express()

app.use(express.urlencoded({extended:true}))
require('./utils/connectToDb')()
app.set("view engine","ejs")
app.get('/',(req,res)=>{

    res.send("<a href='/books'>books</a>")
})

app.use("/books",bookrouter)
app.post("/comment/:id",newComment)
app.use((error,req,res)=>{
    res.send(error) 
})
const PORT=process.env.PORT
app.listen(PORT,()=>console.log('server running on port ',PORT))