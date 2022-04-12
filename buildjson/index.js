const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();

function BuildJson() {}

BuildJson.prototype.CreateJsonFromDatabase = async function(dbPath, jsonPath) {
    var db = new sqlite3.Database(dbPath);
    await FillJson(db, jsonPath);
}

async function FillJson(db, jsonPath) {
    var json = {};

    json = await FillTitle(db, json);
    json = await FillBackground(db, json);
    json = await FillTopLinks(db, json);
    json = await FillTopInfo(db, json);
    json = await FillTopInfoLinkIcons(db, json);
    json = await FillPrintInfo(db, json);
    json = await FillPrintContacts(db, json);
    json = await FillPrintLanguages(db, json);
    json = await FillPrintProjects(db, json);
    json = await FillExperiences(db, json);
    json = await FillEducations(db, json);

    json.skills = {};
    json = await FillSkillsEngines(db, json);
    json = await FillSkillsLanguages(db, json);
    json = await FillSkillsTools(db, json);

    json = await FillOgInfo(db, json);
    json = await FillContacts(db, json);

    json = await FillProjects(db, json);
    for (const project_id in json.work_projects) {
        json.work_projects[project_id].images = await FillProjectImages(db, json.work_projects[project_id]);
    }
    for (const project_id in json.work_projects) {
        json.work_projects[project_id].links = await FillProjectLinks(db, json.work_projects[project_id]);
    }

    json = await FillPersonalProjects(db, json);
    for (const project_id in json.projects) {
        json.projects[project_id].images = await FillPersonalProjectImages(db, json.projects[project_id]);
    }
    for (const project_id in json.projects) {
        json.projects[project_id].links = await FillPersonalProjectLinks(db, json.projects[project_id]);
    }

    json = await FillGamejams(db, json);
    for (const project_id in json.gamejams) {
        json.gamejams[project_id].images = await FillGamejamsImages(db, json.gamejams[project_id]);
    }
    for (const project_id in json.gamejams) {
        json.gamejams[project_id].links = await FillGamejamsLinks(db, json.gamejams[project_id]);
    }

    console.log("New json:");
    console.log(json);

    var data = JSON.stringify(json);
    fs.writeFileSync(jsonPath, data);
}

function FillTitle(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM information", function(err, rows) {
            json.title = rows[0].title;
            resolve(json);
        });
    });
}

function FillBackground(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM information", function(err, rows) {
            json.background_info = {};
            json.background_info.main_text = rows[0].background;
            resolve(json);
        });
    });
}

function FillTopLinks(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM top_links", function(err, rows) {
            json.top_links = rows;
            resolve(json);
        });
    });
}

function FillTopInfo(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM top_info", function(err, rows) {
            json.top_info = rows[0];
            resolve(json);
        });
    });
}

function FillTopInfoLinkIcons(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM top_link_icons", function(err, rows) {
            json.top_info.link_icons = rows;
            resolve(json);
        });
    });
}

function FillPrintInfo(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM print_information", function(err, rows) {
            json.print_info = rows[0];
            resolve(json);
        });
    });
}

function FillPrintContacts(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM print_contacts", function(err, rows) {
            json.print_info.contacts = rows;
            resolve(json);
        });
    });
}

function FillPrintLanguages(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM print_languages", function(err, rows) {
            json.print_info.languages = rows;
            resolve(json);
        });
    });
}

function FillPrintProjects(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM print_projects", function(err, rows) {
            json.print_info.projects = rows;
            resolve(json);
        });
    });
}

function FillExperiences(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM experiences", function(err, rows) {
            json.experiences = rows;
            resolve(json);
        });
    });
}

function FillEducations(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM educations", function(err, rows) {
            json.educations = rows;
            resolve(json);
        });
    });
}

function FillSkillsEngines(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM skills_engines", function(err, rows) {
            json.skills.engines = rows.map((row) => row.text);
            resolve(json);
        });
    });
}

function FillSkillsLanguages(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM skills_languages", function(err, rows) {
            json.skills.languages = rows.map((row) => row.text);
            resolve(json);
        });
    });
}

function FillSkillsTools(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM skills_tools", function(err, rows) {
            json.skills.tools = rows.map((row) => row.text);
            resolve(json);
        });
    });
}

function FillOgInfo(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM og_info", function(err, rows) {
            json.og_info = rows[0];
            resolve(json);
        });
    });
}

function FillContacts(db, json) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM contacts", function(err, rows) {
            json.contacts = rows;
            resolve(json);
        });
    });
}

function FillProjects(db, json) {
    return new Promise((resolve, reject) => {
        var projects = [];
        db.each("SELECT * FROM projects", function(err, project_row) {
            projects.push(project_row);
        },
        function(err, count){
            json.work_projects = projects;
            resolve(json);
        });
    });
}

function FillProjectImages(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM projects_images WHERE project_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

function FillProjectLinks(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM projects_links WHERE project_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

function FillPersonalProjects(db, json) {
    return new Promise((resolve, reject) => {
        var projects = [];
        db.each("SELECT * FROM personal_projects", function(err, project_row) {
            projects.push(project_row);
        },
        function(err, count){
            json.projects = projects;
            resolve(json);
        });
    });
}

function FillPersonalProjectImages(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM personal_projects_images WHERE project_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

function FillPersonalProjectLinks(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM personal_projects_links WHERE project_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

function FillGamejams(db, json) {
    return new Promise((resolve, reject) => {
        var projects = [];
        db.each("SELECT * FROM gamejams ORDER BY \"order\" DESC", function(err, project_row) {
            projects.push(project_row);
        },
        function(err, count){
            json.gamejams = projects;
            resolve(json);
        });
    });
}

function FillGamejamsImages(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM gamejams_images WHERE gamejam_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

function FillGamejamsLinks(db, project) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM gamejams_links WHERE gamejam_id = " + project.id;
        console.log("sql = " + sql);
        db.all(sql, function(err, rows) {
            resolve(rows);
        });
    });
}

module.exports = BuildJson;
