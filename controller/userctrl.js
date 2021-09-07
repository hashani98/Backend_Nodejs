const{SignUp,SignIn} = require("../service/userService");

module.exports = {

    SignUpctrl: (req, res) => {
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

      SignInctrl: (req, res) => {
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

};