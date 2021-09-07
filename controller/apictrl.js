var Amadeus = require('amadeus'); 
require("dotenv").config();
const axios = require('axios').default;

var amadeus = new Amadeus({ 
    clientId: process.env["AMADEUS_CLIENT_ID"], 
    clientSecret: process.env["AMADEUS_CLIENT_SECRET"] 
  });


module.exports = {

    getFlightOffers: (req, res) => {
      const body = req.body;
    amadeus.shopping.flightOffersSearch.get({ 
      originLocationCode: body.origin, 
      destinationLocationCode: body.destination, 
      departureDate: body.date, 
      adults: body.adults
    }).then(function (response) { 
      //console.log(response.data);
      //res.send(response.data);
      const arr=response.data;
      var jsonss = new Array();
      arr.forEach(obj => {
        // console.log({
        //     id:obj.id,
        //     price:obj.price
        // });
        var json1={ id:obj.id, price:obj.price };
        jsonss.push(json1);
        //console.log(json1);

    });

    console.log(jsonss);


      res.json({
        sucess: 1,
        message: jsonss,
      });
    }).catch(function (responseError) { 
      console.log(JSON.stringify(responseError)); 
      res.json({
        sucess: 0,
        message: "Invalid Input",
      });
    });
  },

  getFlightRates: (req, res) => {
    const body = req.body;
    amadeus.shopping.flightDates.get({
        origin: body.origin, 
        destination: body.destination, 
    
  }).then(function (response) { 
    console.log(response.data);
    //res.send(response.data);
    const arr=response.data;
      var jsonss = new Array();
      arr.forEach(obj => {
        var json1={ departureDate:obj.departureDate, returnDate:obj.returnDate,price:obj.price.total};
        jsonss.push(json1);

    });
    res.json({
        sucess: 1,
        message: jsonss,
      });
  }).catch(function (responseError) { 
    console.log(JSON.stringify(responseError)); 
    //res.send("There is no Flights From given Origin to Destination");
    res.json({
        sucess: 0,
        message: "There is no Flights From given Origin to Destination",
      });
  });
},

// getAnotherRecommend: (req, res) => {
//     const body = req.body;
//     amadeus.referenceData.recommendedLocations.get({
//         cityCodes: body.cityCodes,
//         travelerCountryCode: body.travelerCountryCode
//       }).then(function (response) { 
//     console.log(response.data);
//     //res.send(response.data);
//     const arr=response.data;
//       var jsonss = new Array();
//       arr.forEach(obj => {
//         var json1={ name:obj.name};
//         jsonss.push(json1);

//     });
//     res.json({
//         sucess: 1,
//         message: jsonss,
//       });
//   }).catch(function (responseError) { 
//     console.log(JSON.stringify(responseError)); 
//     //res.send("There is no Flights From given Origin to Destination");
//     res.json({
//         sucess: 0,
//         message: "There is no Recommended Locations",
//       });
//   });
// },

getSafety: (req, res) => {
    const body = req.body;

    amadeus.safety.safetyRatedLocations.get({
      latitude: body.latitude,
      longitude: body.longitude
    }).then(function (response) { 
      var arr=response.data;
      console.log(arr[0].safetyScores);
    //console.log(response.data.safetyScores);
    //res.send(response.data);
    
    res.json({
        sucess: 1,
        message: arr[0].safetyScores,
      });
  }).catch(function (responseError) { 
    console.log(JSON.stringify(responseError)); 
    //res.send("There is no Flights From given Origin to Destination");
    res.json({
        sucess: 0,
        message: "There is no  Location as given informations",
      });
  });
},

getCurrentWeather: (req, res) => {
  const body = req.body;
  var lat=body.latitude;
  var lon=body.longitude;
axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=91d7d653d938092865bb8c9cb658b0e3`)
  .then(response => {
    //console.log(response.data.url);
    console.log(response.data.current.weather);
    res.json({
      sucess: 1,
      message: response.data.current.weather,
    });
  })
  .catch(error => {
    console.log(error);
    res.json({
      sucess: 0,
      message: "There is an Error getting weather",
    });
  });
},

getAttractionslistByName: (req, res) => {
  const body = req.body;
  var place=body.place;
  var options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: place,
      limit: '30',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '3233a747edmsh73d2adeb09d5483p1fa690jsn8a90ceccefb5'
    }
  };
  
  axios.request(options).then(function (response) {
  
  //	console.log(response.data);
    const arr=response.data.data;
    //console.log(arr);
    var jsonss = new Array();
    
      //for (const obj of arr) {
        for (var i = 0; i < arr.length; i++){
          //console.log(arr[i]);
      obj=arr[i];
          
      if(obj.result_type=='things_to_do'){
        //console.log(obj);
        var json1={name:obj.result_object.name,location_id:obj.result_object.location_id ,imagelink:obj.result_object.photo.images.small.url,latitude:obj.result_object.latitude,longitude:obj.result_object.longitude,reviews:obj.result_object.num_reviews};
        jsonss.push(json1);
      
      }
    }
  
  console.log(jsonss);
  res.json({
    sucess: 1,
    message: jsonss,
  });
  
  }).catch(function (error) {
    console.error(error);
    res.json({
      sucess: 0,
      message: "There is no  Attractions as given input",
    });
  });
  
},

getAccomodationslistByName: (req, res) => {
  const body = req.body;
  var place=body.place;
  var options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: place,
      limit: '30',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '3233a747edmsh73d2adeb09d5483p1fa690jsn8a90ceccefb5'
    }
  };
  
  axios.request(options).then(function (response) {
  
  //	console.log(response.data);
    const arr=response.data.data;
    //console.log(arr);
    var jsonss = new Array();
    
      //for (const obj of arr) {
        for (var i = 0; i < arr.length; i++){
          //console.log(arr[i]);
      obj=arr[i];
          
      if(obj.result_type=='restaurants' || obj.result_type=='lodging'){
        console.log(obj.result_object.geo_description);
        var json1={name:obj.result_object.name,location_id:obj.result_object.location_id ,imagelink:obj.result_object.photo.images.small.url,latitude:obj.result_object.latitude,longitude:obj.result_object.longitude,reviews:obj.result_object.num_reviews};
        jsonss.push(json1);
      
      }
    }
  
  //console.log(jsonss);
  res.json({
    sucess: 1,
    message: jsonss,
  });
  
  }).catch(function (error) {
    console.error(error);
    res.json({
      sucess: 0,
      message: "There is no  Attractions as given input",
    });
  });
  
},

getDetailsWhenClickSpecificLocation: (req, res) => {
  const body = req.body;
  var locationId=body.location_id;
  var options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/get-details',
    params: {location_id: locationId},
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '3233a747edmsh73d2adeb09d5483p1fa690jsn8a90ceccefb5'
    }
  };
  
  axios.request(options).then(function (response) {
  
  //	console.log(response.data);
    const place=response.data;
    //console.log(place.name);
  var details={name:place.name,
    location_id:place.location_id,
    latitude:place.latitude,
    longitude:place.longitude,
    reviews:place.num_reviews,
    imagelink:place.photo.images.small.url,
    rating:place.rating,
    description:place.description,
    ranking_category:place.ranking_category,
  };
  
  res.json({
    sucess: 1,
    message: details,
  });
  
  }).catch(function (error) {
    console.error(error);
    res.json({
      sucess: 0,
      message: "There is no  Attractions as given input",
    });
  });
  
},

    };