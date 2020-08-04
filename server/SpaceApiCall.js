const https = require('https');

_Base_URL = 'https://api.spacexdata.com/v3/landpads/';

const callExternalApiUsingHttp = (landPadId,callback) => {
    let _Target_URL =_Base_URL+landPadId;
    https.get(_Target_URL, (resp) => {
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

module.exports.callApi = callExternalApiUsingHttp;