const Itinerary =  require('../models/itinerary_model.js');


// Create new Itinerary
const CreateItinerary = (req, res) => {
    const itin = new Itinerary({
        "Name":req.body.Name
    });
    itin.save()
        .then(success => {
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            res.json({ success: true, message:"success" });
    })
        .catch((err) => {
            res.statusCode = 500;
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 
};


// Get all itineraries
const GetAllItin  = (req,res) =>{
    Itinerary.find()
    .then(success => {
            // console.log(success);
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            res.json({ success: true, message:success });
    })
        .catch((err) => {
            res.statusCode = 500;
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 
    
}


// Add members to the itinerary
const AddMembers = (req,res) => {
    const members = req.body.members;
    const plan_id = req.body.plan_id;
    Itinerary.update(
        {_id:plan_id},
        {$push:{ TripMates: { $each: members }}}
    )
    .then(success => {
            // console.log(success);
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            res.json({ success: true, message:success });
    })
        .catch((err) => {
            res.statusCode = 500;
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 

}


// Delete itinerary
const DeleteItinerary = (req,res) =>{
    const plan_id = req.body.plan_id;
    Itinerary.findByIdAndDelete(plan_id)
    .then(success => {
            console.log(success);
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            res.json({ success: true, message:success });
    })
        .catch((err) => {
            res.statusCode = 500;
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 

}





module.exports ={
    CreateItinerary,
    AddMembers,
    GetAllItin,
    DeleteItinerary
};
