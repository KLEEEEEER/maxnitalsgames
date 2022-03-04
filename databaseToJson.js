var BuildJson = require('buildjson');

var buildJson = new BuildJson();
buildJson.CreateJsonFromDatabase('./src/database/database.db', '/foo');
