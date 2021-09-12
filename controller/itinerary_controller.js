const Itinerary =  require('../models/itinerary_model.js');


const CreateItinerary = (req, res) => {
    console.log("done");
    const itin  = req.body.itin;
    Itinerary(itin).save()
        .then((success) => {
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


module.export ={
    CreateItinerary,

} 














module.exports = {
  
};