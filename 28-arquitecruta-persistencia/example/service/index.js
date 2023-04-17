const userDao = require("../dao/factory");
const UserService = require("./user.service");



const userService = new UserService(userDao)




module.exports={
    userService,

}