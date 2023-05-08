const express = require("express")
const app = express();


    app.get("/",(req,res)=>{
        let count = 0;
        const msg= "soy el proceso "+process.pid+" resolviendo la tarea compleja"
        console.log(msg)
        for (let i = 0; i < 5e8; i++) {
            count+=i
        }
        res.json({message:msg,pid:process.pid,count})
    })



    app.listen(8081,()=>{
        console.log("Servidor escuchando en el puerto 8080")
    })