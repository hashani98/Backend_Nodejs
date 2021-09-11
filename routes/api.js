const router = require('express').Router();
const {getFlightOffers,getFlightRates,getSafety,getCurrentWeather,getLocationslistByName,getAccomodationslistByName,getDetailsWhenClickSpecificLocation}=require("../controller/apictrl");
//const{getAnotherRecommend}=require("../controller/apictrl");

router.post('/flightofffers',getFlightOffers);
router.post('/flightrates',getFlightRates);
//router.post('/anotherrecommend',getAnotherRecommend);
router.post('/safety',getSafety);

router.post('/weather',getCurrentWeather);

router.post('/locations',getLocationslistByName);
router.post('/accomodations',getAccomodationslistByName);
router.post('/getdetails',getDetailsWhenClickSpecificLocation);

module.exports=router;