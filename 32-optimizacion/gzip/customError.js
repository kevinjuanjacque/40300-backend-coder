class CustomError {
    static createError({msg="Error generico",code=1,tipoError="ERROR_DESCONOCIDO"}){

        const error = new Error(msg);
        error.code=code;
        error.type=tipoError;

        throw error

    }
}

module.exports =CustomError;