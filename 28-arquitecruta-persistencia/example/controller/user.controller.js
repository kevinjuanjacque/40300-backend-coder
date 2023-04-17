const userModel = require("../model/user.model")
// const userDao = require("../dao/mongo/user.dao")
// const userDao = require("../dao/memory/user.dao");
const UserDto = require("../dao/DTOs/user.dto.js");
const { userService } = require("../service");



const getUsers = async (req,res)=>{
    const users = await userService.getUser();
    res.json({msg:'ok',users})
}

const insertUser = async (req,res)=>{
    const {user} = req.body
    const userDTO = new UserDto(user)
    const newUser = await userService.insertUser(userDTO);
    res.json({msg:'ok',newUser})
}

const updateUser = async (req,res)=>{
    const {id,user} = req.body
    const newUser = await userService.updateUser(user,id);
    res.json({msg:'ok',newUser})
}

const deleteUser = async (req,res)=>{
    const {id} = req.body
    await userService.delete(id);
    res.json({msg:'ok',})
}


module.exports ={
    getUsers,
    insertUser,
    updateUser,
    deleteUser
}

