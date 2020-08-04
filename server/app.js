const dbPool = require('./db');
const express =require('express');
const bodyParser = require('body-parser');
const apiCallFromLandingPad = require('./SpaceApiCall');
const apiCallFromCapsules = require('./SpaceApiCapsules');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/capsules', async (req, res) => {
    apiCallFromCapsules.callApi(function(response){
        res.write(response);
        res.end();
        if(response&&response.length>0){
            res.status(200);
            res.send({
                result: response
            });
        }else{
            res.status(400);
            res.send({
                error: 'Not find capsules'
            });
        }
    });
});

app.get('/', async (req, res) => {
    const rows = await dbPool.query('SELECT * FROM spaceData');
    res.status(200);
    res.send({
        result: rows
    });
});

app.get('/:id', async (req, res) => {
    const landPadId = req.params.id;
    const rows = await dbPool.query('SELECT * FROM spaceData WHERE id=?', [landPadId]);
    if(rows){
        res.status(200);
        res.send({
           result: rows
        });
    }else{
        apiCallFromLandingPad.callApi(landPadId,function(response){
            let landPad = {};
            let  sql = "INSERT INTO spaceData SET ?";
            const LandingPad = JSON.parse(response);
            if(LandingPad&&LandingPad.id){
                landPad = { 
                    id:LandingPad.id,full_name:LandingPad.full_name,stat:LandingPad.status,
                    location_name:LandingPad.location.name,location_region:LandingPad.location.region,
                    location_longitude:LandingPad.location.longitude,location_latitude:LandingPad.location.latitude
                };
                dbPool.query(sql,landPad,(err,result)=>{
                    if(err){
                        res.send({
                            result: err
                        }) 
                    }
                    res.send({
                        result: landPad
                    })          
                });
            }else{
                res.send({
                    error: 'Not Find Such Landing pad '
                });
            }     
        });
    }
});

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);