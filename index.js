var express = require('express');
var validator = require('validator');
var bodyParser = require('body-parser');


const path = require('path')
const PORT = process.env.PORT || 5001;


app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/rides', function(request, response) {
  response.header('Access-Control-Allow-Origin', '*');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const { Client } = require('pg');
const client = new Client({
	connectionString: process.env.DATABASE_URL || "postgres://ehfdignzevcfia:a29c3babdee74427cdea9adf2d038f1217970bb46b6aad54a480e9d67fb90c4d@ec2-34-197-91-131.compute-1.amazonaws.com:5432/d2n3ghra37lb0i",
	ssl: {
		rejectUnauthorized: false
	}
});
client.connect();


app.post('/rides', function(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");

  var username = request.body.username; 
  var lat = request.body.lat;
  var lng = request.body.lng;
  var created_at = new Date();
  var data = [];

  if(username != undefined && lat != undefined && lng != undefined){
    //adds 10 random cars - deleted
    client.query('SELECT * FROM riderequests', (error, result) => {
      if(!error){
        for(var i = 0; i<result.rows.length; i++){
          data.push({'post':'post',username:result.rows[i].username, lat:result.rows[i].lat, lng:result.rows[i].lng});
        }
        response.send(data);
      }
    });
  }
  else{
    response.send({"error":"Whoops, something is wrong with your data!"});
  }    
});


app.get('/passenger.json', function(request, response)  {
  var username = request.query.username;
  if(username == undefined || username == null){
    response.send('[]');
  }
  else{
    client.query("SELECT * FROM vehicles WHERE username = '" + username + "'", (error, result) => {
			if (!error) {
				response.send(result.rows);
			}
		});
  }
});


app.get('/vehicle.json', function(request, response)  {
  var username = request.query.username;
  if(username == undefined || username == null){
    response.send('[]');
  }
  else{
    client.query("SELECT * FROM vehicles WHERE username = '" + username + "'", (error, result) => {
			if (!error) {
				response.send(result.rows);
			}
		});
  }
});


app.get('/', function(request,response) {
  var data = [];
  client.query('SELECT * FROM riderequests', (error, result) => {
    if(!error){
      for(var i = 0; i<result.rows.length; i++){
        data.push({'get':'get',username:result.rows[i].username, lat:result.rows[i].lat, lng:result.rows[i].lng});
      }
      response.send(data);
    }
  });
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));