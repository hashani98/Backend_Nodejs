const router = require('express').Router();
const {SignUpctrl,SignInctrl,SearchUser}=require("../controller/user_controller");

router.post('/signup',SignUpctrl);
router.post('/signin',SignInctrl);
router.post('/searchUser',SearchUser);


module.exports=router;