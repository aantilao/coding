
const express = require ('express');
const app = express();
const champion = require('./scripts/champion.js');

/*
app.listen(5000, () => {
	console.log('Server  on Port 5000');
});*/
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

app.get('/', (req, res) => {
	const champ =  algo();
	champ.then(info=> {
		res.json(info);
	})
	.catch(error => {
		res.send(error);
	});
});

async function algo(){
	return champions = await champion.read_champions();	
}