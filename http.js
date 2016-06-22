var Twitter = require('twitter');
var http = require('http');
var PORTBad = 7000;
var PORTGood = 7500;

var twitterKeys = {
  consumer_key: 'j815aXDKsTROutUey2UaSln7x',
  consumer_secret: 'opSwsd6irGQj3Dn0e7iOUScNHmd8urUEi9SOyqKQPLxivJZAWs',
  access_token_key: '580525093-D9IGytxZdL8br2feqQDtWld0lDhzUfv33RpNHlsE',
  access_token_secret: 'oFAmw4RVJJr4YRG28aBwORdJqU8RkVpi5EO15FByYemxP',
}



//return good
var server = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	//if twitter needs to be used
	var twit = function() {
		var client = new Twitter(twitterKeys);
		client.get('statuses/user_timeline', {screen_name: 'gusmano84', count: 20}, function(error, tweets, response) {
		for (var prop in tweets) {
  			console.log(tweets[prop].text);
  		}
  		})
	}

	var bad = Array("you suck","you bite","Loser","Slacker","weak");
	var bader = bad[Math.floor(Math.random()*bad.length)];

	var reallybad = bader

	res.end(bader);
});

//return bad
var server2 = http.createServer(function(req, res) {
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	var good = Array("you are awesome","love you","my angel","the best","you are amazing");
	var gooder = good[Math.floor(Math.random()*good.length)];

	var reallygood = gooder

	res.end(reallygood);
});

server.listen(PORTBad, function() {
	console.log('Server Listening on %d', PORTBad);
})

server2.listen(PORTGood, function() {
	console.log('Server Listening on %d', PORTGood);
})


// http://localhost:7000/
// http://localhost:7500/
