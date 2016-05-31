var httpModule = require('http');
var requestModule = require('request');
var resultBody;

requestModule('http://www.ya.ru', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        resultBody = body;
    }
})

var server = httpModule.createServer (function(req, res) {
    res.writeHead(200);
    res.end(resultBody);
});

server.listen(8080);
