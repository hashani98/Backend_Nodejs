const router = require('express').Router();
const {getFlightOffers,getFlightRates,getSafety,getCurrentWeather,getLocations,getAccomodations,AutoComplete,getDetailsOdSpecificLocation,getNearbyRestaurants,getNearbyAttractions,getNearbyAccommodations,getSuggestions,getAttractionsbyUserPreference,getTravelMode,getTravelCostBetweenTwoPlaces}=require("../controller/apictrl");
//const{getAnotherRecommend}=require("../controller/apictrl");

router.post('/flightofffers',getFlightOffers);
router.post('/flightrates',getFlightRates);
//router.post('/anotherrecommend',getAnotherRecommend);
router.post('/safety',getSafety);

router.post('/weather',getCurrentWeather);

router.post('/locations',getLocations);
router.post('/accomodations',getAccomodations);
router.post('/auto',AutoComplete);
router.post('/details',getDetailsOdSpecificLocation);
router.post('/nearbyrestaurants',getNearbyRestaurants);
router.post('/nearbyattractions',getNearbyAttractions);
router.post('/nearbyaccommodations',getNearbyAccommodations);
router.post('/suggestedlocations',getSuggestions);
router.post('/locationsbycategory',getAttractionsbyUserPreference);
router.post('/travelmode',getTravelMode);
router.post('/gettaxifare', getTravelCostBetweenTwoPlaces);

module.exports=router;