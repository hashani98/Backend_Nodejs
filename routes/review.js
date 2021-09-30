const router = require('express').Router();
const {Addreview,GetReviews}=require("../controller/review_controller");

router.post('/addreview',Addreview);
router.post('/getreviews',GetReviews);

module.exports=router;