const Itinerary =  require('../models/itinerary_model.js');


// Create new Itinerary
const CreateItinerary = (req, res) => {
    console.log(Date(req.body.startDate));
    const itin = new Itinerary({
        "Name":req.body.Name,
        "TripTime":{
            "StartDate":new Date(req.body.startDate),
            "EndDate":new Date(req.body.endDate)
        },
        "Version":0,
        "Budget":{
            "InitialBudget":req.body.initialBud,
            "TotalBudget":0
        }
    });
    itin.save()
        .then(success => {
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            console.log("Success");
            res.json({ success: true, message:itin });
    })
        .catch((err) => {
            res.statusCode = 500;
            console.log("failed");
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 
};


// Get all itineraries
const GetAllItin  = (req,res) =>{
    const user_id = req.body.user_id;
    //Itinerary.find()
    Itinerary.find({ TripMates: user_id })
    //{"user_id":"457"}
    .then(result => {
            console.log(result);
            //var jsonss={name:result.Name,plan_id:result._id }
            const arr=result;
            var jsonss = new Array();
            for (var i = 0; i < arr.length; i++){
              obj=arr[i];
            var json1={name:obj.Name,plan_id:obj._id};
            jsonss.push(json1);
            
      //}
    }
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            res.json({ success: true, message:jsonss});
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

//Add Location
const AddLocation = (req,res) => {
    const location_id = req.body.location_id;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id},
        {$push:{ Locations: location_id}},
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

//Remove Location
const RemoveLocation = (req,res) => {
    const location_id = req.body.location_id;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id},
        {$pull:{ Locations: location_id}},
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

//Change Location
const ChangeLocation = (req,res) => {
    const oldlocation_id = req.body.oldlocation_id;
    const newlocation_id = req.body.newlocation_id;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id,Locations: oldlocation_id},
        {$set:{ 'Locations.$': newlocation_id}},
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

//Change Plan Name
const ChangePlanName = (req,res) => {
    const new_name = req.body.new_name;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id},
        {$set:{ Name: new_name}},
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

//Edit Travel Budget
const EditTravelBudget = (req,res) => {
    const new_budget = req.body.new_budget;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id},
        {$set:{ 'Budget.InitialBudget' : new_budget}},
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

//Add Travel Media
const AddTravelMedia = (req,res) => {
    const travel_media_id = req.body.travel_media_id;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id},
        {$push:{ Transport: travel_media_id}},
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


//Change Travel Media
const ChangeTravelMedia = (req,res) => {
    const oldmedia_id = req.body.oldmedia_id;
    const newmedia_id = req.body.newmedia_id;
    const plan_id = req.body.plan_id;
    Itinerary.updateOne(
        {_id:plan_id,Transport: oldmedia_id},
        {$set:{ 'Transport.$': newmedia_id}},
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



module.exports ={
    CreateItinerary,
    AddMembers,
    GetAllItin,
    DeleteItinerary,
    AddLocation,
    RemoveLocation,
    ChangeLocation,
    ChangePlanName,
    EditTravelBudget,
    AddTravelMedia,
    ChangeTravelMedia
};
