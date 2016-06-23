var http = require('http');

// array of insults
var bad = [
  'You stuck up, half-witted, scruffy-looking Nerf herder', 
  'You slimy piece of worm-ridden filth!', 
  'You flea-bitten furball'
];

// array of good things
var good = [
  'You\'re awesome!', 
  'I like your style!', 
  'You are the most perfect you there is.'
];

http.createServer(handleRequest).listen(7000);
http.createServer(handleRequest).listen(7500);

function handleRequest(req, res) {
  console.log(req.url);

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var reply;
  if (req.socket.localPort == 7000) {
    reply = good[Math.floor(Math.random() * good.length)];
  } else {
    reply = bad[Math.floor(Math.random() * bad.length)];
  }

  res.end(reply);
}