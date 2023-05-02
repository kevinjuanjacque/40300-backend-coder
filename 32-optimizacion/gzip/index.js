const express = require("express");
const compression = require("express-compression");
const CustomError = require("./customError");
const { ARG_INVALID, MONGO_ERROR } = require("./EErrors");



const app= express();


app.listen(8080,()=>{
    console.log("Servidor escuchando en el puerto 8080")
})

//creando un mdw global
app.use(compression({
    brotli:{
        enabled:true,zlib:{}
    }
}))



app.get("/",(req,res)=>{
    let stringlargo = "";
    CustomError.createError({msg:"SE INGRESARON VALORES INVALIDO",code:"500",tipoError:ARG_INVALID})
    for (let i = 0; i < 300000; i++) {
        stringlargo += "hola coder texto largo"
    }
    res.send(stringlargo)
})


app.use((error,req,res,next)=>{
    console.log({error:error.message})
    switch (error.type) {
        case MONGO_ERROR:
            res.status(error.code).json({msg:"Errror en la conexion con mongodb"})
            break;

        case ARG_INVALID:
            res.status(error.code).json({msg:"Error con argumentos ivalidos"})
            break;
    
        case ARG_INVALID:
                res.status(error.code).json({msg:"Error con argumentos ivalidos"})
                break;
    
        default:
            res.status(500).json({msg:"Errror Generico no se sabe que ocurrio"})

            break;
    }
    res.status(error.code).json({...error,msg:error.message});
})