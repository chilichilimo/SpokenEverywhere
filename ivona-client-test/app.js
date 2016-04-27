var fs = require('fs'),
Ivona = require('./node_modules/ivona-node/src/main'),
express = require('express');

var app = express();

var ivona = new Ivona({
    accessKey: 'GDNAICVSFFSXHLYP2NOQ',
    secretKey: 'MUDLDOs4C7CyTszAmpvMJmbD1/c8WktgHMSgtPx3'
});

ivona.listVoices().on('complete', function(voices) {
    console.log(voices);
});

app.get('/requestmp3/:text', function(req, res)
{
	var text = req.params.text;
	ivona.createVoice(text).pipe(res);
});

app.get('/', function(req, res)
{
	res.send('Ivona Server');
});

app.listen(3003, function()
{
	console.log('App listening on port 3003');
});

//  [string] text - the text to be spoken
//  [object] config (optional) - override Ivona request via 'body' value
ivona.createVoice('This is the text that will be spoken.')
    .pipe(fs.createWriteStream('test.mp3'));
