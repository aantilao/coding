
const express = require ('express');
const path = require('path')
const app = express();
const fs = require('fs');

//app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, () => {
	console.log('Server  on Port 5000');
});

app.get('/', (req, res) => {
	
	let champions = [];
	//console.log(champions.data)

	var dir = './lolsito/parche/data/es/champion/'
	fs.readdir(dir, function (err, files) {
		console.log(files)
		if (err) {
			console.log("No se pudo leer la carpeta", err);
		} else {
			files.forEach(function (file) {
				var path_file = path.join(dir, file) 
				var data = fs.readFileSync(path_file);
				var champion = JSON.parse(data);
				//console.log(Object.keys(champion.data));
				/*var aux = {
					nombre : Object.values(champion.data.id)
				}
				console.log(aux);*/
				//console.log(champion.data);
				var name = file.slice(0,-5);
				//console.log(champion.data[name].id);
			});	
		}
		
	});
	res.send("holi")
	

	
});
console.log('taskete kudasai');
