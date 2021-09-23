const{SignUp,SignIn} = require("../service/userService");
const {User}= require('../models/user_model');



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

    //get bookark Locations
    GetBookmarkLocations = (req, res) => {
      const email = req.body.email;
      User.findOne({Email:email})
      .then((result) => {
        if (result == null){
          res.json({ success:false, message:"no bookmarks"});
        }
        else{
          res.json({ success:true, message:result.Bookmarks});
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
  const user_id = req.body.user_id;
  User.update(
      {_id:user_id},
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