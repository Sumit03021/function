import express  from "express";
// import cors from "cors"
const app=express()

// bad practice in industry due to dist folder build from frontend (npm run build) then move to backend that remains always static folder use middleware for that.
app.use(express.static('dist'));


app.get('/',(req,res)=>{
  res.send("server is ready")
})



app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
    id: 1,
    title: 'A joke',
    content: 'This is a joke'
    },
    {
    id: 2,
    title: 'Another joke',
    content: 'This is another joke'
    },
    {
    id: 3,
    title: 'A third joke',
    content: 'This is a third joke',
},
{
id: 4,
title: 'A fourth joke',
content: 'This is a fourth joke',
},
{
id: 5,
title: 'A fifth joke',
content: 'This is a fifth joke'
}];
res.send(jokes)
})
const port =process.env.PORT || 3000;
//cors---cross origin request that should 
//1. if whitelist port number of frontend by backend then easy otherwise domain whitelist.
app.listen(port,()=>{
  console.log(`server is connected at ${port}`)
})


















