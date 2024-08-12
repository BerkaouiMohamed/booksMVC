const mongoose=require('mongoose')
module.exports=async()=>{
 try{
    await mongoose.connect(process.env.DB_URI,{dbName:'librery'})
    console.log("db connected")

 }
 catch(e){
    console.log(e)
 }
}