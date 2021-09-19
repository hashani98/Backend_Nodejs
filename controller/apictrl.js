var Amadeus = require('amadeus'); 
require("dotenv").config();
const axios = require('axios').default;
const{getFlightOffersService,getLocationsService,getAccomodationsService,AutoCompleteService,getDetailsOfSpecificLocationService,getFlightRatesService,getSafetyService,getCurrentWeatherService,getNearbyRestaurantsService,getNearbyAttractionsService,getNearbyAccommodationsService,getSuggestionsService,getAttractionsbyUserPreferenceService,getTravelModeService,getTravelCostBetweenTwoPlacesService} = require("../service/apiServices");

var amadeus = new Amadeus({ 
    clientId: process.env["AMADEUS_CLIENT_ID"], 
    clientSecret: process.env["AMADEUS_CLIENT_SECRET"] 
  });


module.exports = {

  getFlightOffers: (req, res) => {
    const body = req.body;
    getFlightOffersService(
      body.origin,
      body.destination,
      body.date,
      body.adults,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getFlightRates: (req, res) => {
    const body = req.body;
    getFlightRatesService(
      body.origin,
      body.destination,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getSafety: (req, res) => {
    const body = req.body;
    getSafetyService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getCurrentWeather: (req, res) => {
    const body = req.body;
    getCurrentWeatherService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getLocations: (req, res) => {
    const body = req.body;
    getLocationsService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getAccomodations: (req, res) => {
    const body = req.body;
    getAccomodationsService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  AutoComplete: (req, res) => {
    const body = req.body;
    AutoCompleteService(
      body.place,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },

  getDetailsOdSpecificLocation: (req, res) => {
    const body = req.body;
    getDetailsOfSpecificLocationService(
      body.place_id,
      (err, result) => {
        if (err) {
          res.json({
            sucess: false,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: true,
            data: result,
          });
        }
      }
    );

  },
  

  getNearbyRestaurants: (req, res) => {
    const body = req.body;
    getNearbyRestaurantsService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getNearbyAttractions: (req, res) => {
    const body = req.body;
    getNearbyAttractionsService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getNearbyAccommodations: (req, res) => {
    const body = req.body;
    getNearbyAccommodationsService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },


  getSuggestions: (req, res) => {
    const body = req.body;
    getSuggestionsService(
      body.latitude,
      body.longitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },


  getAttractionsbyUserPreference: (req, res) => {
    const body = req.body;
    getAttractionsbyUserPreferenceService(
      body.latitude,
      body.longitude,
      body.type,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  getTravelMode: (req, res) => {
    const body = req.body;
    getTravelModeService(
      body.originlatitude,
      body.originlongitude,
      body.destinationlatitude,
      body.destinationlongitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },


  getTravelCostBetweenTwoPlaces: (req, res) => {
    const body = req.body;
    getTravelCostBetweenTwoPlacesService(
      body.originlatitude,
      body.originlongitude,
      body.destinationlatitude,
      body.destinationlongitude,
      (err, result) => {
        if (err) {
          res.json({
            sucess: 0,
            message: "Invalid Login",
          });
        } else {
          res.json({
            sucess: 1,
            data: result,
          });
        }
      }
    );

  },

  




    };