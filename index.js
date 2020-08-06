
const express = require ('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

console.log('taskete kudasai');

app.listen(5000);


const fetch = require("node-fetch");
const url = 'https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-4d261a57-f4d6-4c6d-ab28-446734c7efdd';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(err => console.log(err))
