const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema1 = new Schema({
    //_id:ObjectId,
    Username:String,
    Email:String,
    Password:String,
    Preferences:Array,
    Bookmarks:Array,

})

const Userr=mongoose.model('User',newSchema1,"User");

module.exports={
User:Userr,
};
//module.exports = mongoose.model('User',newSchema1,"User")