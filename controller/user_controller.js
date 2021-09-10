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
    };


module.exports = {
  SignUpctrl,
  SignInctrl,
  SearchUser
};