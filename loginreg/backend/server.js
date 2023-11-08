const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const CustModel=require('./models/Customer');

const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/customers");

app.post("/login", (req,res)=>{
    const {mail,pwd}=req.body;
    CustModel.findOne({email:mail})
    .then(user=>{
        if(user){
            if(user.passwd===pwd)
            res.json("Success")
           else
            res.json("Incorrect Password")
        }
        else{
            res.json("No such user exists")
        }
    })
})


app.post("/register",(req,res)=>{
    CustModel.create(req.body)
        .then(customer=>res.json(customer))
        .catch(err=>res.json(err))
    }

);

app.listen(3000,()=>{
    console.log("server is running");
})