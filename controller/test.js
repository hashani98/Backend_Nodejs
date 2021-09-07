const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyB5kbAgwe1FVhBkrdh1cfeQ9c-kdaNWovY'
  });

  googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });