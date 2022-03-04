var sqlite3 = require('sqlite3').verbose();

function BuildJson() {

}

BuildJson.prototype.CreateJsonFromDatabase = async function(dbPath, jsonPath) {
    var db = new sqlite3.Database(dbPath);

    await FillJson(db);
}

async function FillJson(db) {
    var json = {};

    json = await FillProjects(db, json);
    //json = await FillTest(db, json);

    console.log("New json:");
    console.log(json);
}

async function FillProjects(db, json) {
    return new Promise((resolve, reject) => {
        var projects = [];
        db.each("SELECT * FROM projects", function(err, project_row) {
            projects.push(project_row);
        },
        function(err, count){
            json.projects = projects;
            resolve(json);
        });
    });
}

function FillTest(db, json) {
    return new Promise((resolve, reject) => {
        var test = [];
        db.each("SELECT * FROM test", function(err, row) {
            test.push(row);
        },
        function(err, count){
            json.test = test;
            resolve(json);
        });
    });
}

function FillProjectImages(db, projects) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM projects_images WHERE project_id = " + id, function(err, rows) {
            resolve(rows);
        });
    });
}

module.exports = BuildJson;
