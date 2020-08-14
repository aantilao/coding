/*const fetch = require("node-fetch");
const url = 'https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-4d261a57-f4d6-4c6d-ab28-446734c7efdd';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(err => console.log(err))
*/

const fetch = require("node-fetch");
fetch('./data/champions.json')
	.then(results => results.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))


/*const fs = require('fs');
fs.readFile('./data/champions.json',  function (err, data) {
	if (err){
		console.log(err)
	}	
	console.log(data.toString())
	
}*/
