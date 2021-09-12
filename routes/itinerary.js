const router = require('express').Router();
const {CreateItinerary}=require("../controller/itinerary_controller");

router.post('/createItin',CreateItinerary);



module.exports=router;