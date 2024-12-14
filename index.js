require("dotenv").config()

const express =require("express")

const app=express()
const port=4000;

app.get("/",(req , res)=>{
    res.send("it's a get resquest")
    
})

app.listen(process.env.PORT,()=>{
    console.log(`welcome to backnd \nyour server port is ${port}`);
    
})
