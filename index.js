
const express = require ('express');
const path = require('path')
const app = express();
const { info } = require('console');
const champion = require('./scripts/champion.js');
const { rejects } = require('assert');
const { resolve } = require('path');

//app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, () => {
	console.log('Server  on Port 5000');
});

app.get('/', (req, res) => {
	const champ =  algo();
	champ.then(resolve=> {
		console.log(resolve);
		res.json(resolve);
	});
});

async function algo(){
	return  champions = await champion.read_champions();
	//console.log(champions, "final");
	
}