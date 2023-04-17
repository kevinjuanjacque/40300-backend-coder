const mongoose = require("mongoose")


const userCollection = 'UserDao';


const userSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    full_name:String,
})


const userModel = mongoose.model(userCollection,userSchema);

module.exports = userModel;

