const axios = require('axios');

const geocode = (address, callback) => {
  const locationUrl = 'http://api.positionstack.com/v1/forward';
  axios.get(locationUrl,{params: {
    access_key: '9f74402627346df0af32096ffe17abc6',
    query: address,
    limit: 1
  }}).then(function (response) {
    //  console.log(response.data.data);
      if(response.data.data.length>0)
      {
    callback(undefined, {latitude: response.data.data[0].latitude, longitude: response.data.data[0].longitude, location: response.data.data[0].label});
      }else{
      console.log('No location returned');
      callback('No location returned', undefined)
      }
    })
    .catch(function (error) {
      if(error){
      console.log(error);
      callback('Unable to connect', undefined)
      }
    }); 

}

module.exports = {geocode}