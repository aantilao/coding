
const express = require ('express');
const app = express();
var fs = require('fs');
const champion = require('./scripts/champion.js');

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), () => {
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
//enrutador de items
app.get('/items/', (req, res) => {
	res.sendFile(__dirname + '/lolsito/parche/img/champion/Akali.png');
});

//enrutador de imagenes de campeones 
app.get('/imgs/champion/:name', (req, res) => {

	path = __dirname + '/lolsito/parche/img/skin/'+ req.params['name'];
	fs.stat(path, error => {
		if (!error){
			console.log("------------------", req.params['name']);
			res.sendFile(path);			
		} else {
			res.send('Esta ruta no existe');
		}
	});
});
