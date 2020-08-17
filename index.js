
const express = require ('express');
const path = require('path')
const app = express();
const { info } = require('console');
const champion = require('./scripts/champion.js');
const { rejects } = require('assert');

//app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, () => {
	console.log('Server  on Port 5000');
});

app.get('/', (req, res) => {
	algo();
	//console.log(algo());

	//res.send(algo());
});
console.log('taskete kudasai');
async function algo(){
	const champions = await champion.read_champions();
	console.log(champions, "final");
}