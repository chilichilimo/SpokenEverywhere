/*
 * Please see the included README.md file for license terms and conditions.
 */

//This file has funstions that sends sentences
//The Virtual bookmarking is done here.
//Reading out is done here.

function sound(source,volume,loop)
{
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        if(this.finish)return false;
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
function playStopButton();
{
document.getElementById("play").value="stop";
isPlaying = true;
}

var mainText = document.getElementsByTag("p");
var mainTextArray;
for (var i = 0; i < mainText.length; i++)
{
  var temp = mainText[i].split(".");
  for (var j = 0; j < temp.length; j++)
  {
    mainTextArray.push(temp[j]);
  }
}
var bookmark = 0;
var playStopButton = getElementById("play");
var save = getElementById("save");
var isPlaying = false;

if(play.onclick)
{
  i = bookmark;
  while (true)
  {
    ivona.createVoice(mainTextArray[i]).pipe(fs.createWriteStream('example/test.mp3'));
    sound('example/test.mp3',80,false);
    if (play.onclick)
    {
      break;
    }
    if (save.onclick)
    {
        bookmark = i;
    }
    i++;
  }
}

var fs = require('fs'),Ivona = require('../src/main');

ivona.listVoices().on('complete', function(voices) {
    console.log(voices);
});

//  [string] text - the text to be spoken
//  [object] config (optional) - override Ivona request via 'body' value
