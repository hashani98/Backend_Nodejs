const router = require('express').Router();
const bodyParser = require("body-parser");
const ItinController=require("../controller/itinerary_controller");
router.use(bodyParser.json());

router.get('/', (req,res)=>{
    res.json({message:"itinerary router"})
} );


// Create new itinerary
router.post('/createitin', ItinController.CreateItinerary);
// Add members to travel plan
router.post('/addmembers', ItinController.AddMembers);
// Get all itinerary details
router.get('/getallitin', ItinController.GetAllItin);
// Delete Itinerary
router.post('/deleteitin', ItinController.DeleteItinerary);



module.exports=router;