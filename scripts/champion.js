const fs = require('fs');
const path = require('path')
function read_champions(){
	var dir = './lolsito/parche/data/es/champion/'
	fs.readdir(dir, function (err, files) {
		let champions = [];
		console.log(files)
		if (err) {
			console.log("No se pudo leer la carpeta", err);
		} else {
			files.forEach(function (file) {
				var path_file = path.join(dir, file) 
				var data = fs.readFileSync(path_file);
				var champion = JSON.parse(data);
				
				
				//console.log(champion.data);
				var name = file.slice(0,-5);
				var aux = {
					name : champion.data[name].id,
					id : champion.data[name].key,
					title : champion.data[name].title,
					lore : champion.data[name].lore,
					tags : champion.data[name].tags,
					partype : champion.data[name].partype,
					difficulty : champion.data[name].info.difficulty,
					Q : {
						name : champion.data[name].spells[0].name,
						description : champion.data[name].spells[0].description,
					},
					W : {
						name : champion.data[name].spells[1].name,
						description : champion.data[name].spells[1].description,
					},
					E : {
						name : champion.data[name].spells[2].name,
						description : champion.data[name].spells[2].description,
					},
					R: {
						name : champion.data[name].spells[3].name,
						description : champion.data[name].spells[3].description,
					},
					passive : {
						name : champion.data[name].passive.name,
						description : champion.data[name].passive.description,
					},

				};
				champions.push(aux);
				//console.log('----------------------------')
				//console.log(aux)
				
			});	
		}
		console.log(champions)
		return champions;
	})
}
module.exports = {
	read_champions : read_champions
	}; 