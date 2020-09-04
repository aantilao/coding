
const express = require ('express');
const app = express();
const champion = require('./scripts/champion.js');

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


app.get('/', (req,res) => {
	res.send('LOL');
});

app.get('/champions/', (req, res) => {
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

app.get('/items/', (req, res) => {
	res.sendFile(__dirname + '/lolsito/parche/img/champion/Akali.png');
});

app.get('/lol/', (req,res) =>{
	res.send('Aún la amo socio ');
});

app.get(':img(/[A-Z][a-z]*.jpg)/', (req, res) => {
	console.log("------------------", req.params['img']);
	res.sendFile(__dirname + '/lolsito/parche/img/skin'+ req.params['img']);
});
