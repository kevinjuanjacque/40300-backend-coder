const { default: mongoose } = require("mongoose");
const { percistence } = require("../config");


let userDao={};
(async ()=>{
    switch (percistence) {
    case "MONGO":
        console.log('mogno')
        mongoose.connect('mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority')
        const mognoPercistence = await require("../dao/mongo/user.dao");
        userDao.get = mognoPercistence.get
        userDao.insert = mognoPercistence.insert
        userDao.update = mognoPercistence.update
        userDao.delete = mognoPercistence.delete
        break;

    case "MEMORY":
        const memory = await require("../dao/memory/user.dao");
        userDao.get = memory.get
        userDao.insert = memory.insert
        userDao.update = memory.update
        userDao.delete = memory.delete
        break;

    default:
        mongoose.connect('mongodb+srv://admin:DUeqEG4AE0ha7Nf6@cluster0.vucevye.mongodb.net/?retryWrites=true&w=majority')
        const mognoPercistence2 = await require("../dao/mongo/user.dao");
        userDao.get = mognoPercistence2.get
        userDao.insert = mognoPercistence2.insert
        userDao.update = mognoPercistence2.update
        userDao.delete = mognoPercistence2.delete
        break;
}})()



module.exports = userDao