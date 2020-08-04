
const https = require('https');
 
_EXTERNAL_URL = 'https://api.spacexdata.com/v3/capsules';

const callExternalApiUsingRequest = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
    let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            return callback(data);
        });        
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingRequest;