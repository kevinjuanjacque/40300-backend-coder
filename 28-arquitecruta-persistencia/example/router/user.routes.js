const { Router } = require("express");
const { getUsers, insertUser, deleteUser, updateUser } = require("../controller/user.controller");



const userRouter = Router()


userRouter.get('/', getUsers)
userRouter.post('/', insertUser)
userRouter.put('/', updateUser)
userRouter.delete('/', deleteUser)

module.exports = userRouter