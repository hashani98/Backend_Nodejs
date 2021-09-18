const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ItinerarySchema = new Schema({
    Admin:{
        type: Schema.Types.ObjectId,
        ref:'User'
          },
    Budget:
        {
            InitialBudget: Number,
            TotalBudget:Number
        }
    ,
    DateCreated: {
        type:Date,
        default:Date.now()
        },
    Locations:Array,
    Name:String,
    Transport:Array,
    TripMates:Array,
    TripTime: {
        StartDate: Date,
        EndDate: Date
    },
    Version: Number

},{collection:'Itinerary'})

const Itinerary=mongoose.model('Itinerary',ItinerarySchema);

module.exports = Itinerary;

