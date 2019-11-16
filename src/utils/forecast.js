const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/5f10c5572da0a8bc7f07c7d6e33f3f29/'+ encodeURIComponent(lat) + ',' + encodeURIComponent(long) +'?units=si'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            const {temperature, precipProbability} = body.currently
            callback(undefined, "It is currently " + temperature + " degress out. There is a " + precipProbability + "% of rain.")
        }
    })
}

module.exports = forecast
