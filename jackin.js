var http = require('http');
const fs = require('fs');

try {
    // don't continue the event loop until this is totally loaded in.
    var database = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
} catch (err) {
    console.log(`Error reading file from disk: ${err}`);
}

// print db contents to console
// console.log(database)

var json_database = JSON.stringify(database);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    // const json_database = JSON.stringify(database);
    res.end(json_database);
}).listen(8080);
