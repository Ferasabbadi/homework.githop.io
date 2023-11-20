const express =require('express')
require('dotenv').config()
const workoutRoutes =require('./routes/workout')
const mongoose=require('mongoose')
const { default: mongoose } = require("mongoose")

const connectDB=async()=>{

    try{
        await mongoose.connect('mongodb+srv://feras:feras1999n@cluster0.1vnjsid.mongodb.net/?retryWrites=true&w=majority')
        console.log('connected')
    }
     catch(e){
        console.log(e.message)
    }
   }

   connectDB

const app =express()
app.use(express.json())
app.use('/api/workouts',workoutRoutes)``

 app.get('/',(req,res)=>{
    res.json({mssg: 'welcome to the app'})
 })
app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})