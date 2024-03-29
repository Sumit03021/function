const express = require('express');
const User = require('../models/User');
const crypto= require('crypto');
const argon2 = require('argon2');
const router = express.Router();

let myEmail = ""
router.get('/register',(req,res)=>{
  res.render('auth/signup')
})

router.post('/register',async(req,res)=>{
  try{

    let {fullName,userName, email, tel, password} = req.body;
    let username = await User.findOne({userName:userName});
    let Email = await User.findOne({email:email});
    if(!username && !Email){
      let salt = crypto.randomBytes(16)
      let hash = await argon2.hash(password,salt)
      password = "hello"
      await User.create({fullName , userName , email , password, hash, tel})
      res.redirect('/login')
    }else if(username){
      alert("username already exist.")
    }else if(Email){
      alert("this email address is already exist.")
    }
  }
  catch(e){
    console.log("error in signup catch form: ",e)
  }
})

router.get('/login',(req,res)=>{
  res.render('auth/login')
})

router.post('/login',async(req,res)=>{
  try{
    let {email, password} = req.body;
    let Email = await User.findOne({email:email});
    if(Email){
      let hash = Email.hash;
      let isValid = await argon2.verify(hash,password)
      if(isValid){
        myEmail = email;
        res.redirect('/user')
      }else{
        alert("incorrect email or password.")
      }
    }else{
      alert("incorrect email or password.")
    }
  }
  catch(e){
    console.log("error in login form catch: ",e)
  }

})

router.get('/user',async(req,res)=>{
let user = await User.findOne({email:myEmail})
res.render('auth/profile',{user})
})

router.get('/user/edit',async(req,res)=>{
  let user = await User.findOne({email:myEmail})
  res.render('auth/edit',{user})
})

router.post('/user/edit',async(req,res)=>{
  try{
    let {fullName, userName , tel , email, password, id} = req.body;
    let user = await User.findById(id)
    if(user){
      let salt = crypto.randomBytes(16);
      let hash = await argon2.hash(password, salt)
      password = "hello"
      await User.findByIdAndUpdate(id,{fullName, userName , tel , email, password, hash})
    }else{
      console.log("error in edit form.")
    }
  }
  catch(e){
    console.log("error in update form catch: ",e)
  }
})

router.post('/user/delete',async(req,res)=>{

})

module.exports = router