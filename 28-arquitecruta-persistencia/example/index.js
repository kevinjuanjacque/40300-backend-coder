require("dotenv");
const express = require("express")
const mongoose = require("mongoose");
const userRouter = require("./router/user.routes");
const nodemailer  = require("nodemailer")
const twilio  = require("twilio")


const app = express();

//mdw
app.use(express.json())

//routes
app.use('/api/user',userRouter)



// Sid. AC1982b3d59cb22400e2711ed71b91fe6a
// +15077086360
// 4dd929cb4b0d232e84284ed9623b2140
const MY="tu numero"
const SID = "AC1982b3d59cb22400e2711ed71b91fe6a"
const NUMBER_PHONE="+15077086360"
const TOKEN = "4dd929cb4b0d232e84284ed9623b2140";


const client = twilio(SID,TOKEN)

const transport = nodemailer.createTransport({
    service: 'gmail',
    port:587,
    auth:{
        user:'kevin.jacque@alumnos.ucentral.cl',
        pass:'198585211'
    }
})



app.get('/mail',async (req,res)=>{
    try {
        const result = await transport.sendMail({
            from:'ariel@gmail.com',
            to:'kevin.jacque@alumnos.ucentral.cl',
            subject:'saludos',
            html:'<h1>Hola coder</h1>',
            attachments:[
                {
                    filename:'perrito.jpeg',
                    path: __dirname+'/assets/a.jpeg',
                    cid:'perroti123'
                },{
                    filename:'perrito2.jpeg',
                    path: __dirname+'/assets/a.jpeg',
                    cid:'perroti2'
                },{
                    filename:'perrito3.jpeg',
                    path: __dirname+'/assets/a.jpeg',
                    cid:'perroti3'
                }
            ]
        })
        console.log(result);
        res.json({msg:'ok'})
    } catch (error) {
        console.log(error)
    }
})


app.get('/msg/:name/:product',async (req,res)=>{
    try {
        const {name,product} = req.params;
        const resp = await client.messages.create({
            from:NUMBER_PHONE,
            to:MY,
            body:`Gracias ${name}, tu solicitud de ${product}, a sido aprobada`
        })
        res.json({msg:'ok'})
    } catch (error) {
        console.log(error);
    }



})






app.listen(8080,()=>{
    console.log('servidor escuchando puerto http://localhost:8080/')
})