require("dotenv").config()
const express =require("express")
const app=express()
const port=4000;

const myData={
    "first Song ": "Moyee Moyee",
    "Second Song ": "Kahi Sy TU a Ja",
    "Third Song ": "EK Rat",
    "Five Song ": "KASlh ",
    " Six ": "Moyee Moyee",
    "Seven Song ": "Moyee Moyee",
    "Eight Song ": "Moyee Moyee",
}

// here send simple Data in Response from get request 

app.get("/",(req , res)=>{
    res.send("it's a get resquest")
    
})


app.get("/mycall",(req,res)=>{
    res.send("Grest second request from mycall")
})

// here to send json formatData

app.get("/myData",(req,res)=>{
    res.json(myData)
})


// here the server listen the Request

app.listen(process.env.PORT,()=>{
    console.log(`welcome to backnd \nyour server port is ${port}`);
    
})
