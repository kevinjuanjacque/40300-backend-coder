const cluster = require("cluster");
const {cpus} = require("os")
const express = require("express")

// console.log(cpus().length)


if (cluster.isPrimary) {
    console.log("Soy el proceso principal",cluster.isPrimary)
    for (let i = 0; i  < 15; i++) {
        //creando un hijo/nodo
        cluster.fork();
    }
    cluster.on("disconnect",(worker)=>{
        console.log("Se desconecto el worker",worker.process.pid)
        cluster.fork();
    })
}else{
    console.log("Soy un proceso hijo - el pid ",process.pid,cluster.isPrimary,)

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



    app.listen(8080,()=>{
        console.log("Servidor escuchando en el puerto 8080")
    })

}