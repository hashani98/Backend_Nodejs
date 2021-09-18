const router = require('express').Router();
const {SignUpctrl,SignInctrl,SearchUser,AddBookmark,GetBookmarkLocations}=require("../controller/user_controller");

router.post('/signup',SignUpctrl);
router.post('/signin',SignInctrl);
router.post('/searchUser',SearchUser);
router.post('/addbookmark',AddBookmark);
router.post('/getbookmarks',GetBookmarkLocations);


module.exports=router;