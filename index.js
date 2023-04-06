const express=require('express');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
dotenv.config({ path: './config.env' });
const cors=require('cors');
const connection =require('./model/registmodel');
const User=require('./model/Schema');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const fast2sms = require('fast-two-sms')
const app=express();
app.use(cors());
app.use(express.json())
app.use(cookieParser());
connection();

function generateaccessToken(user) {
    const payload = {
      userId: user._id,
      email: user.email
    };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
  }
  function generatereferessToken(user) {
    const payload = {
      userId: user._id,
      email: user.email
    };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
  }
app.post("/api/signup",async(req,res)=>
{
    try{
        const {email,password,phone}=req.body;
        console.log(phone)
        // const phone=document.getElementById('Phone_number').value;
        const options={
          authorization:"IC26d7jW6DOARxWpLx0zTboohbVdU37xs7ANI7gukcQDRXXvEPJLH1GFPrUI",
          message:'This is test otp code message your otp code is 5698',
          Number:phone
        }
        fast2sms.sendMessage(options).then((response)=>
        {
          console.log(response)
        }).catch((e)=>
        {
          console.log(e);
        })
    const password1=await bcrypt.hash(password,10);
   
    const user=await User.create({
        email ,password:password1
    })
    const token = generateaccessToken(user);
    const refers_token = generatereferessToken(user);
    res.cookie('jwt', refers_token, { httpOnly: true });
    return res.status(201).json({

        user,
        refers_token,
        token,
        message:"successfully entered detail"
     })
    }catch(e){
        console.log("some error ",e);
    }
})

app.post("/api/login",async(req,res)=>
{
    const {email,password}=req.body;
    try{
    const user=await User.findOne({email});
        // console.log(user);
    
     const password123=await bcrypt.compare(password,user.password);
    //  const email1=await User.find({email})
    // console.log(password123);
     if(password123)
     {
        const token = generateaccessToken(user);
        res.cookie('jwt', token, { httpOnly: true });
        res.status(201).send({
            message:"succeffully login",
            token
        })
        res.status(401).json({ message: "Authentication failed" });
     }
    }catch(e)
    {
        console.log(e);
    }
})

const port=process.env.port;
app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
})
