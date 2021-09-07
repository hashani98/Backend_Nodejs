const router = require('express').Router();
const {SignUpctrl,SignInctrl}=require("../controller/userctrl");

router.post('/signup',SignUpctrl);
router.post('/signin',SignInctrl);


module.exports=router;