const {Review}= require('../models/reviews_model');

const Addreview = (req, res) => {
    const review = new Review({
        "Title":req.body.title,
        "Description":req.body.description,
        "LocationID":req.body.loc_id,
        
    });
    review.save()
        .then(success => {
            res.statusCode = 200;
            res.set("Content-Type", "application/json");
            console.log("Success");
            res.json({ success: true, message:review });
    })
        .catch((err) => {
            res.statusCode = 500;
            console.log("failed");
            res.set("Content-Type", "application/json");
            res.json({ success: false, message: err });
    }); 
};

const GetReviews  = (req,res) =>{
    const loc_id = req.body.loc_id;
    //Itinerary.find()
    Review.find({ LocationID: loc_id })
    //{"user_id":"457"}
    .then(result => {
            console.log(result);
            const arr=result;
            var jsonss = new Array();
            for (var i = 0; i < arr.length; i++){
              obj=arr[i];
            var json1={title:obj.Title,description:obj.Description};
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

module.exports = {
    Addreview,
    GetReviews
  
  };