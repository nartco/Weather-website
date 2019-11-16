const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&language=fr&units=si&access_token=pk.eyJ1IjoibmFydGNvIiwiYSI6ImNqdjNyaDd1ZzA4OGM0M3BtejVxYWpqdGMifQ.G1k8uFGUDavgYukkGesoig'
    request({ url, json: true }, (error, {body}) => {
        const { features } = body
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if (features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, 
                {latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name}
            )
        }
    })
}

module.exports = geocode