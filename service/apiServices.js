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

      getLocationslistByNameService(inplace,callback) {
  var place=inplace;
  var options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: place,
      limit: '30',
      sort: 'distance',
      
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '3233a747edmsh73d2adeb09d5483p1fa690jsn8a90ceccefb5'
    }
  };
  
  axios.request(options)
        .then(function (response) { 
            const arr=response.data.data;
    //console.log(arr);
    var jsonss = new Array();

    
      //for (const obj of arr) {
        for (var i = 0; i < arr.length; i++){
          //console.log(arr[i]);
      obj=arr[i];
          
      //if(obj.result_type=='things_to_do'){
        //console.log(obj);
       const categarr=obj.result_object.subcategory;
        var jsons2 = new Array();
        for (var j = 0; j < categarr.length; j++){
          ob=categarr[j]
          jsons2.push(ob.name);
        }
        //console.log(jsons2.includes("Tours") );
        if((jsons2.includes("Tours")||jsons2.includes("Transportation")||jsons2.includes("Outdoor Activities"))==false){
        var json1={name:obj.result_object.name,type:obj.result_type,categories:jsons2,rating:obj.result_object.rating,location_id:obj.result_object.location_id ,imagelink:obj.result_object.photo.images.small.url,latitude:obj.result_object.latitude,longitude:obj.result_object.longitude,reviews:obj.result_object.num_reviews};
        jsonss.push(json1);
        }
      //}
    }
  
  console.log(jsonss);
      
          return callback(null,jsonss);
      
          }).catch(error => {
            console.log(error);
            return callback(null,error);
          });
      },

      getAccomodationslistByNameService(inplace,callback) {
        var place=inplace;
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
        
        axios.request(options)
              .then(function (response) { 
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
        
        console.log(jsonss);
            
                return callback(null,jsonss);
            
                }).catch(error => {
                  console.log(error);
                  return callback(null,error);
                });
            },

            getDetailsWhenClickSpecificLocationService(inlocation_id,callback) {
                var locationId=inlocation_id;
        var options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/attractions/get-details',
            params: {location_id: locationId},
            headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '3233a747edmsh73d2adeb09d5483p1fa690jsn8a90ceccefb5'
            }
        };
                
                axios.request(options)
                      .then(function (response) { 
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
                
                console.log(details);
                    
                        return callback(null,details);
                    
                        }).catch(error => {
                          console.log(error);
                          return callback(null,error);
                        });
                    },
};