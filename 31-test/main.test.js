// [] OK
// [][] OK
// [[]] OK
// [[[][]]] OK
// ][ FAIL
// ][][ FAIL
// [][]][ FAIL

const checkBracket = require("./main");


console.log("Test 1: probar caso correcto de [], se espera que retorne ok")
let resp = checkBracket("[]")
let expect = "ok"
if(resp == expect){
    console.log("Test 1, Paso exitosamente");
}else{
    console.log("Test 1, fallo se espera ", expect," pero se recibe ", resp)
}


console.log("Test 2: probar caso correcto de [][], se espera que retorne ok")
resp = checkBracket("[][]")
expect = "ok"
if(resp == expect){
    console.log("Test 2, Paso exitosamente");
}else{
    console.log("Test 2, fallo se espera ", expect," pero se recibe ", resp)
}


console.log("Test 3: probar caso correcto de [[]], se espera que retorne ok")
resp = checkBracket("[[]]")
expect = "ok"
if(resp == expect){
    console.log("Test 3, Paso exitosamente");
}else{
    console.log("Test 3, fallo se espera ", expect," pero se recibe ", resp)
}

console.log("Test 4: probar caso correcto de ][][, se espera que retorne fail")
resp = checkBracket("][][")
expect = "fail"
if(resp == expect){
    console.log("Test 4, Paso exitosamente");
}else{
    console.log("Test 4, fallo se espera ", expect," pero se recibe ", resp)
}

console.log("Test 5: probar caso correcto de que no se entregen parametros, se espera que retorne string vacio")
resp = checkBracket()
expect = ""
if(resp == expect){
    console.log("Test 5, Paso exitosamente");
}else{
    console.log("Test 5, fallo se espera ", expect," pero se recibe ", resp)
}





