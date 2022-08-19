
const express=require('express')
const app=express()

const port=process.env.PORT||4202
app.get('/student',(req,res)=>{
   let data={
    name:"shubham"
   }
    res.write("hello")
    res.end()
}).listen(port)