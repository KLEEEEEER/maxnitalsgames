//var BuildJson = require('buildjson');
const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

//var buildJson = new BuildJson();
//buildJson.CreateJsonFromDatabase('./src/database/database.db', './src/data/maininfo.json');

var db = new sqlite3.Database('./src/database/database.db');
var json = {};

JsonBuild();

async function JsonBuild() {
    json = await FillTitle(db, json);
    console.log(json);
}


function FillTitle(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM information", function(err, rows) {
            json.title = rows[0].title;
            resolve(json);
        });
    });
}
