var http = require('http');
var PORTBad = 7000;
var PORTGood = 7500;

//return good
var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var bad = "<u><b>You Suck!</b></u>"

	res.end(bad);
});

//return bad
var server2 = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var bad = "<b>You Rock!!!!!!</b>"

	res.end(bad);
});

server.listen(PORTBad, function() {
	console.log('Server Listening on %d', PORTBad);
})

server2.listen(PORTGood, function() {
	console.log('Server Listening on %d', PORTGood);
})


// http://localhost:7000/
