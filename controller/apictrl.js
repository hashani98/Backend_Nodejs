var Amadeus = require('amadeus'); 
require("dotenv").config();
const axios = require('axios').default;
const{getFlightOffersService,getDetailsWhenClickSpecificLocationService,getAccomodationslistByNameService,getFlightRatesService,getSafetyService,getCurrentWeatherService,getLocationslistByNameService} = require("../service/apiServices");

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

  getLocationslistByName: (req, res) => {
    const body = req.body;
    getLocationslistByNameService(
      body.place,
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

  getAccomodationslistByName: (req, res) => {
    const body = req.body;
    getAccomodationslistByNameService(
      body.place,
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

  getDetailsWhenClickSpecificLocation: (req, res) => {
    const body = req.body;
    getDetailsWhenClickSpecificLocationService(
      body.location_id,
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