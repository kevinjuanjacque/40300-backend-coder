const { default: mongoose } = require("mongoose")
const userModel = require("../../model/user.model")

class UserDaoMongo{

    get = () => userModel.find()
        
    insert = (user)=> userModel.create(user) 

    update =(user, id)=>userModel.findByIdAndUpdate(id,user)

    delete =(id)=>userModel.findByIdAndDelete(id);
    
}


module.exports =new UserDaoMongo() 