const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    //_id:ObjectId,
    Description:String,
    LocationID:String,
    Title:String,

}, {collection:'Review'})

const Revieww=mongoose.model('Review',reviewSchema,"Review");

module.exports={
    Review:Revieww,
};
//module.exports = mongoose.model('User',newSchema1,"User")