const axios = require('axios');

const url = 'http://api.weatherstack.com/current';

const forecast = (latitude, longitude, callback) => {
  axios.get(url,{params: {
  access_key: 'ad29ba79033d58c0366222f28e4d50b3',
  query: latitude + ',' + longitude,
  units: 'm'
}}).then(function ({ data }) {
  if(data.error){
    callback('Unable to find location ' + data.error, undefined)
  }else {
    callback(undefined, data.current.weather_descriptions[0] + '. The remperature now is ' + data.current.temperature + ' degress, it feels like ' + data.current.feelslike+' degress. Wind speed is ' + data.current.wind_speed+ '.');
  }
  })
  .catch(function (error) {
    callback(error, undefined);
  });
};

module.exports = {forecast}