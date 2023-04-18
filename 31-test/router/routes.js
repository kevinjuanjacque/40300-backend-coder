const { Router } = require("express");
const generateUsers = require("../utils/generateUsers");
const {faker} = require("@faker-js/faker");




const router = Router()

router.get('/users',(req,res)=>{
    const quantityUserRandom = faker.random.numeric(2);
    const userArray=[];
    for (let index = 0; index < quantityUserRandom; index++) {

        userArray.push(generateUsers())        
    }

    res.json({
        msg:"ok",
        users:userArray
    })
})


module.exports=router