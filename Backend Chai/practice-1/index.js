const express =require('express')
require('dotenv').config()// use to hide or not directly present sensitive info like email,port ,url.
const app =express()
const port = process.env.PORT ;
 app.get('/',(req,res)=>{
    res.send("hello world")
 })
app.get('/sumit',(req,res)=>{
    res.send("sumit kumar")
})

app.listen(port,()=>{
    console.log(`server connected at ${port}`);
})























