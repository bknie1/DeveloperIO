// When user is typing, bot will also be 'typing'.

// REQUIRES
const slack = require('slack'); // npm slack package

// SETUP: User w/ Slack bot token.
var user = {
  token: process.env.token;
}
// CONNECT
// connect(object w/ user token, callback function))
slack.rtm.connect(user, function(err, rtm) {
  if(err) return console.log("Error: Couldn't connect");

  var ws = websocket(rtm.url);
  var typing = through(write);
  ws.pipe(typing) // Says she's typing. But you can do more.
  typing.pipe(ws) // The websocket.
  // We can do something similar to event listeners with streams.
  ws.on('data', function () {
    // By default we get back a buffer; an octet encoding of data.
    // Extremely fast to pass around. Instead, toString.
    console.log(data.toString());
    // Defaults to 'hello'
  });
});

function write(buf, enc, next) {
  var row = JSON.parse(buf.toString());
  // We don't want to admit an event every time we get data.
  // Instead, we only want to respond when we see a message.
  if(row.type !== 'user_typing') {
    // If we don't see the '...' that someone is typing...
    return next();
  }
  // Slack API requires that you pass an ID.
  var msg {
    type: 'typing',
    channel: row.channel,
    id: id++; // Ugly but it works.
  }
  var payload = JSON.stringify(msg);
  return next(payload);
}
