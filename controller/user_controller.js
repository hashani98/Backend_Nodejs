const{SignUp,SignIn} = require("../service/userService");
const {User}= require('../models/user_model');
const axios = require('axios').default;



     SignUpctrl = (req, res) => {
        const body = req.body;
        SignUp(
          body.username,
          body.email,
          body.password,
          (err, result) => {
            if (err) {
              //console.log(err);
              res.json({
                sucess: 0,
                message: "Invalid Email",
              });
            } else {
              res.json({
                sucess: 1,
                data: result,
              });
            }
          }
        );
      },

       SignInctrl =  (req, res) => {
        const body = req.body;
        SignIn(
          body.email,
          body.password,
          (err, result) => {
            if (err) {
              //console.log(err);
              res.json({
                sucess: 0,
                message: "Invalid Login",
              });
            } else {
              res.json({
                sucess: 1,
                data: result,
              });
            }
          }
        );
      },


      SearchUser = (req, res) => {
        const username  = req.body.username;
        console.log(username);
        User.findOne({Username:username})
        .then((result) => {
          if (result == null){
            res.json({ success:false, message:"no user"});
          }
          else{
            res.json({ success:true, message:result.Username});
          }
        })
            .catch((err) => {
                res.statusCode = 500;
                res.set("Content-Type", "application/json");
                res.json({ success: false, message: err });
        });
    }

    //Add Bookmark
    const AddBookmark = (req,res) => {
      const email = req.body.email;
      const location_id = req.body.location_id;

      User.find({Bookmarks:location_id, Email: email}).
        then(
          (result) => {
            if (result.length ==0){
                User.updateOne(
                  {Email:email},
                  {$push:{ Bookmarks: location_id}},
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
            else{  
                   res.json({ success:false, message:"already exists"});
                }
          }
        )

        .catch((err) => {
                res.statusCode = 500;
                res.set("Content-Type", "application/json");
                res.json({ success: false, message: err });
        });

    }

    //get bookark Locations
    GetBookmarkLocations = (req, res) => {
      const email = req.body.email;
      User.findOne({Email:email})
      .then((result) => {
        if (result == null){
          res.json({ success:false, message:"no bookmarks"});
        }
        else{
          const array=result.Bookmarks;
          let jsonss = [];
          let promises = [];
          for (i = 0; i < array.length; i++) {
            place_id=array[i];
            //console.log(place_id);
            promises.push(
              axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyB06HS2ON1-5EI_JRK4_xlDM4McoEs-aO4`).then(response => {
                
                const arr=response.data.result;
            
            var jsons1={name:arr.name,type:arr.types,rating:arr.rating,place_id:arr.place_id,imagelink:arr.photos,latitude:arr.geometry.location.lat,longitude:arr.geometry.location.lng,reviews:arr.user_ratings_total};
            jsonss.push(jsons1);
          })
            )
          }
          
          Promise.all(promises).then(() => res.json({ success:true, message:jsonss}));
 
        }
      })
          .catch((err) => {
              res.statusCode = 500;
              res.set("Content-Type", "application/json");
              res.json({ success: false, message: err });
      });
  }
// Add categories to the itinerary
const AddCategories = (req,res) => {
  const categories = req.body.categories;
  const email = req.body.email;
  User.update(
      {Email:email},
      {$push:{ Preferences: { $each: categories }}}
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


module.exports = {
  SignUpctrl,
  SignInctrl,
  SearchUser,
  AddBookmark,
  GetBookmarkLocations,
  AddCategories

};