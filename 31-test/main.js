
// // The Kata
// // Take an input string with X opening brackets [ and Y closing brackets ], in a random order.
// // Determine if the generated string of brackets is balanced, that is it consists of pairs of opening/closing brackets in the
// // correct order with no matched opening and closing pairs.
// // The kata has been structured to be simple, yet loosely guided. You will need to make decisions just like you were
// // writing code for production.
// // The examples are not meant to guide your implementation, they are there merely to give examples.
// // Do not worry about input other than brackets and empty string.
// // Examples
// // (empty) “”
// // [] OK
// // [][] OK
// // [[]] OK
// // [[[][]]] OK
// // ][ FAIL
// // ][][ FAIL
// // [][]][ FAIL
// // Hint
// // Start off returning string.empty as the default condition. This will allow you properly work the red-green-refactor
// // cycle

// //por cada [ sumo 1, y por cada ] resto 1
//     //en caso de terminar en 0 retrun ok
//     // en caso de en algun momento llegar a -1 return fail
//     //en caso de terminar > que 0 return fail

// const checkBracket = (brackets)=>{
    
//     if(!brackets){
//         return ""
//     }

//     const bracektsArray = brackets.split("");
    
//     let count = 0;

//     for (let i = 0; i < bracektsArray.length; i++) {
//         const element = bracektsArray[i];
//         if(element == "]"){
//             count-=1
//         }else{
//             count+=1
//         }
//         if(count < 0){
//             break;
//         }

//     }


//    return (count === 0 ) ? "ok":"fail"
        

// }



// module.exports= checkBracket;





const express = require("express")
const router = require("./router/routes")


const app = express()



app.use("/api/",router)


app.listen(8080,()=>{
    console.log("Escuchando en el puerto 8080")
})