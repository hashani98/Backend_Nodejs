var Amadeus = require('amadeus'); 
require("dotenv").config();
const axios = require('axios').default;

var amadeus = new Amadeus({ 
    clientId: process.env["AMADEUS_CLIENT_ID"], 
    clientSecret: process.env["AMADEUS_CLIENT_SECRET"] 
  });


module.exports = {

    getFlightOffersService(origin, destination, date,adults,callback) {
        amadeus.shopping.flightOffersSearch.get({ 
            originLocationCode: origin, 
            destinationLocationCode: destination, 
            departureDate: date, 
            adults: adults
          }).then(function (response) { 
            const arr=response.data;
            var jsonss = new Array();
            arr.forEach(obj => {
              var json1={ id:obj.id, price:obj.price };
              jsonss.push(json1);
      
          });
      
          console.log(jsonss);
          return callback(null,jsonss);
      
          }).catch(function (responseError) { 
            console.log(JSON.stringify(responseError)); 
            return callback(null,JSON.stringify(responseError));

          });
      },

      getFlightRatesService(origin, destination,callback) {
        amadeus.shopping.flightDates.get({
            origin: origin, 
            destination: destination, 
        
      }).then(function (response) { 
        console.log(response.data);
        //res.send(response.data);
        const arr=response.data;
          var jsonss = new Array();
          arr.forEach(obj => {
            var json1={ departureDate:obj.departureDate, returnDate:obj.returnDate,price:obj.price.total};
            jsonss.push(json1);
    
        });
      
          console.log(jsonss);
          return callback(null,jsonss);
      
          }).catch(function (responseError) { 
            console.log(JSON.stringify(responseError)); 
            return callback(null,JSON.stringify(responseError));

          });
      },

      getSafetyService(inlatitude, inlongitude,callback) {
        amadeus.safety.safetyRatedLocations.get({
            latitude: inlatitude,
            longitude: inlongitude
          }).then(function (response) { 
            var arr=response.data;
            console.log(arr[0].safetyScores);
      
          return callback(null,arr[0].safetyScores);
      
          }).catch(function (responseError) { 
            console.log(JSON.stringify(responseError)); 
            return callback(null,JSON.stringify(responseError));

          });
      },

      getCurrentWeatherService(lat, lon,callback) {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=91d7d653d938092865bb8c9cb658b0e3`)
        .then(function (response) { 
            console.log(response.data.current.weather);
      
          return callback(null,response.data.current.weather);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

      getLocationsService(inplace,callback) {
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${inplace}+point+of+interest&language=en&radius=10000&key=AIzaSyB06HS2ON1-5EI_JRK4_xlDM4McoEs-aO4`)
        .then(function (response) { 
            //console.log(response.data.results);
            const arr=response.data.results;
            var jsonss = new Array();
            for (var i = 0; i < arr.length; i++){
              obj=arr[i];
            var json1={name:obj.name,type:obj.types,rating:obj.rating,place_id:obj.place_id,imagelink:obj.photos,latitude:obj.geometry.location.lat,longitude:obj.geometry.location.lng,reviews:obj.user_ratings_total};
            jsonss.push(json1);
            
      //}
    }
          return callback(null,jsonss);
          //return callback(null,response.data.results);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

      getAccomodationsService(inplace,callback) {
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${inplace}+point+of+resturents+and+hotels&language=enradius=10000&key=AIzaSyB06HS2ON1-5EI_JRK4_xlDM4McoEs-aO4`)
        .then(function (response) { 
            console.log(response.data.results);
            const arr=response.data.results;
            var jsonss = new Array();
            for (var i = 0; i < arr.length; i++){
              obj=arr[i];
            var json1={name:obj.name,type:obj.types,rating:obj.rating,place_id:obj.place_id,imagelink:obj.photos,latitude:obj.geometry.location.lat,longitude:obj.geometry.location.lng,reviews:obj.user_ratings_total};
            jsonss.push(json1);
            
      //}
    }
          return callback(null,jsonss);
          //return callback(null,response.data.results);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

      AutoCompleteService(inplace,callback) {
        axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inplace}&types=geocode&key=AIzaSyB06HS2ON1-5EI_JRK4_xlDM4McoEs-aO4`)
        .then(function (response) { 
            const arr=response.data.predictions;
            console.log(arr);
            var jsonss = new Array();
            for (var i = 0; i < arr.length; i++){
              obj=arr[i];
            var json1={name:obj.structured_formatting.main_text};
            jsonss.push(json1);
            
      //}
    }
          console.log(jsonss);
          return callback(null,jsonss);
          //return callback(null,response.data.results);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

      getDetailsOfSpecificLocationService(place_id,callback) {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=AIzaSyB06HS2ON1-5EI_JRK4_xlDM4McoEs-aO4`)
        .then(function (response) { 
            const arr=response.data.result;
            console.log(arr);
            var jsonss={name:arr.name,type:arr.types,rating:arr.rating,place_id:arr.place_id,imagelink:arr.photos,latitude:arr.geometry.location.lat,longitude:arr.geometry.location.lng,reviews:arr.user_ratings_total};
    
          console.log(jsonss);
          return callback(null,jsonss);
          //return callback(null,response.data.results);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

};