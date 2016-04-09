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

// for (var i = 0; i < 500; i++)
// {
//   var temp = mainTextArray[i].innerHTML.split(".");
//   for (var j = 0; j < temp.length; j++)
//   {
//     mainTextArray.push(temp[j]);
//   }
// }


var mainTextArray;
var bookmark = 0;




$(document).ready(function(){

    // var foo = "Hello it's me I was wondering if after all these years you'd like to meet";
    // var arr = foo.split(" ");
    // for (var i = 0; i < arr.length; i++) {
    //   console.log(arr[i]);
    // }

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
        console.log($("#mainTextBook").text());
        // var temp = $("#mainTextBook").text().split(" ");
        // console.log(temp[0]);
        // console.log(temp[1]);
        // console.log(temp[2]);
        // console.log(temp[3]);
        // console.log("HELLLOO");
      }
    },1000);

});



//  [string] text - the text to be spoken
//  [object] config (optional) - override Ivona request via 'body' value
