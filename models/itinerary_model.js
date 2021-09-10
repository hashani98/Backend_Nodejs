const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itinerarySchema = new Schema({
    Admin:ObjectId,
    Budget:[
        {
            InitialBudget: Number,
            TotalBudget:Number
        }
    ]
    DateCreated: Date,
    Locations:Array,
    Name:String,
    Transport:Array,
    TripMates:Array,
    TripTime: [{
        StartDate: Date
        EndDate: Date
    }],
    Version: Number

})

const Itinerary=mongoose.model('Itinerary',itinerarySchema,"Itinerary");

module.exports={
    Itinerary:Itinerary,
};
