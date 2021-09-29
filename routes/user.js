const router = require('express').Router();
const {SignUpctrl,SignInctrl,SearchUser,AddBookmark,GetBookmarkLocations,AddCategories,ChangeUsername,
    ChangePassword}=require("../controller/user_controller");

router.post('/signup',SignUpctrl);
router.post('/signin',SignInctrl);
router.post('/searchUser',SearchUser);
router.post('/addbookmark',AddBookmark);
router.post('/getbookmarks',GetBookmarkLocations);
router.post('/addpreferences',AddCategories);
router.post('/changeusername',ChangeUsername);
router.post('/changepassword',ChangePassword);


module.exports=router;