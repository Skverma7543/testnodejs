const { MongoClient } = require("mongodb");
const express=require('express')
const app=express()

const port=process.env.port||4202
app.get('/student',(req,res)=>{
   let data={
    name:"shubham"
   }
    res.write(JSON.stringify(data))
    res.end()
}).listen(port)