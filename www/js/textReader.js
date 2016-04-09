/*
 * Please see the included README.md file for license terms and conditions.
 */

//This file has funstions that sends sentences
//The Virtual bookmarking is done here.
//Reading out is done here.

// function sound(source,volume,loop)
// {
//     this.source=source;
//     this.volume=volume;
//     this.loop=loop;
//     var son;
//     this.son=son;
//     this.finish=false;
//     this.stop=function()
//     {
//         document.body.removeChild(this.son);
//     }
//     this.start=function()
//     {
//         if(this.finish)return false;
//         this.son=document.createElement("embed");
//         this.son.setAttribute("src",this.source);
//         this.son.setAttribute("hidden","true");
//         this.son.setAttribute("volume",this.volume);
//         this.son.setAttribute("autostart","true");
//         this.son.setAttribute("loop",this.loop);
//         document.body.appendChild(this.son);
//     }
//     this.remove=function()
//     {
//         document.body.removeChild(this.son);
//         this.finish=true;
//     }
//     this.init=function(volume,loop)
//     {
//         this.finish=false;
//         this.volume=volume;
//         this.loop=loop;
//     }
// }

// function play()
// {
//   i = bookmark;
//   while (true)
//   {
//     ivona.createVoice(mainTextArray[i]).pipe(fs.createWriteStream('../sound/test.mp3'));
//     sound('../sound/test.mp3',80,false);
//     if (play.onclick)
//     {
//       break;
//     }
//     if (save.onclick)
//     {
//         bookmark = i;
//     }
//     i++;
//   }
// }

// var fs = require('fs'),Ivona = require('../src/main');
// ivona.listVoices().on('complete', function(voices) {
//     console.log(voices);
// });

var mainTextArray;
var bookmark = 0;

$(document).ready(function(){

    var textString = $("#mainTextBook").text();
    var sentenceTokens = textString.split(".");

    $("#playButtonInText").click(function(){
      if ($("#playButtonInText").hasClass("ion-stop")) {
        $("#playButtonInText").attr("class", "button icon ion-play");
      }
      else {
          $("#playButtonInText").attr("class", "button icon ion-stop");
      }
    });
    setInterval(function(){
      if ($("#playButtonInText").hasClass("ion-stop")) {
        // var textFirstPart = "";
        // var textSecondPart = "";
        // for (var i = 0; i < bookmark; i++) {
        //   textFirstPart = textFirstPart + sentenceTokens[i];
        // }
        // for (var i = bookmark+1; i < sentenceTokens.length; i++) {
        //   textSecondPart = textSecondPart + sentenceTokens[i];
        // }
        // console.log(textFirstPart);
        // console.log(textSecondPart);
        // var result = textFirstPart + "<span style=\"background-color:yellow\">" + sentenceTokens[bookmark] + "</span>" + textSecondPart;
        // $("#mainTextBook").html(result);
        // bookmark = bookmark+1;
        var yourstring = sentenceTokens[bookmark];

        $('p:contains('+yourstring+')', document.body).each(function(){
          console.log(bookmark);
          $(this).html($(this).html().replace(
            new RegExp(yourstring, 'g'), '<span style=\"background-color: yellow\">'+ yourstring +'</span>'
          ));
        });
      }
      //bookmark = bookmark+1;
    },2000);

});
//  [string] text - the text to be spoken
//  [object] config (optional) - override Ivona request via 'body' value
