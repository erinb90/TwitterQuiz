

var Twit = require('twit');
var counter=0;
var count=0;
var T = new Twit({
    consumer_key:         'k7uc5amStu8RuHNZlyg956gmz'
  , consumer_secret:      'hLRGnl88K58HZRGWO2oXxAQYiYGimhAk1BHZNDZPy1dlIuIZna'
  , access_token:         '260942293-HOy0rr0R0CRfDGOMxlHWtlndT0wHPXRW758bKy9b'
  , access_token_secret:  'Kq4hxoE4f5jugEqvm4RpvgyiKz5dTN90xbdi9fjQlUwEd'
});


var filter_stream = T.stream('statuses/filter', { track: '#twitter' });
var d = new Date();
var n = d.getTime();

filter_stream.on('tweet', function (tweet) {
	count++;
	//console.log(count);
  //console.log(tweet.text + "\n");
  if( (d.getTime()-n)/1000>1500)
  {
	   console.log("end"+count);
  }
})
 //console.log("end"+count);