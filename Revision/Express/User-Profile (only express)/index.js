const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const UserRoute = require('./routes/User')
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/UserProfileExpress")
.then(()=>{
  console.log("DB connected")
})
.catch((e)=>{
  console.log("error in DB connection: ",e)
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.render('auth/home')
})

//routes
app.use(UserRoute)

app.listen(8080,()=>{
console.log("server connected")
})