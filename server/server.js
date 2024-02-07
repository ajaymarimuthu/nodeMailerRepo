const express=require('express');
require('dotenv').config()

const PORT=process.env.PORT || 5000;

const app=express();
app.use(express.json());



app.use((req,res)=>{
    res.status(200).json({
        status:"success",
        name:"Ajay"
    })
})


app.listen(PORT,()=>{
    console.log("started-------------");
})