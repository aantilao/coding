
const express = require ('express');
const path = require('path')
const app = express();
const fs = require('fs');

//app.use(express.static(path.join(__dirname, 'public')))
app.listen(5000, () => {
	console.log('Server  on Port 5000');
});

app.get('/', (req, res) => {
	
	let info = [];
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
				console.log(champion)
			});	
		}
		
	});
	
	

	
});
console.log('taskete kudasai');
