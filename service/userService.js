const {User,}= require('../models/userModle')

module.exports = {

    SignUp(musername,memail, mpassword, callback) {
        User.findOne({Email:memail},
          (err, user) => {
            if (err) {
              return callback(err);
            } else {
                if(user==null){
                  //console.log(user);
                    const user = User({
                      Username:musername,
                        Email:memail,
                        Password:mpassword,
                        
                    })

                    user.save(
                        (err, user) => {
                          if (err) {
                            return callback(err);
                          } else {
                            console.log("bsh");
                            return callback(null, user);
                          }
                        }
                          );

                }else{
    
                    return callback("Invalid Email");   
                }
              
            }
          }
        );
      },


      SignIn(memail, mpassword, callback) {
        User.findOne({Email:memail,Password:mpassword},(err,user)=>{
            if(err){
                //console.log("errrr");
                console.log(err)
                return callback(err);
            }else{
                //console.log("hhjyeee");
                return callback(null, user);  
            }
        })
      },


};