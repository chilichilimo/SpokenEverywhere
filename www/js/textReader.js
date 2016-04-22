/*
 * Please see the included README.md file for license terms and conditions.
 */

//This file has funstions that sends sentences
//The Virtual bookmarking is done here.
//Reading out is done here.

function Sound(source,volume,loop)
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

var mainTextArray;
var bookRef = new Firebase("https://se-books.firebaseio.com/books/0/Great%20Expectations/");

$(document).ready(function(){
    var sentence = [];
    console.log(bookmark);
    bookmark = bookmark + 1;
    for (var i = 1; i < 60; i++) {
      var stringHelper = i.toString();
      bookRef.child(stringHelper.concat("/text")).on("value", function(snapshot) {
        sentence[i] = snapshot.val();
        console.log(sentence[i]);
        $("#mainTextBook").append("<span id=\"".concat(stringHelper,"\">",sentence[i],"</span>"));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      // console.log(sentence);
      // var finalHTML = "<span id=".concat();
    }

    // var sentenceTokens = textString.split(".");

    $("#playButtonInText").click(function(){
      if ($("#playButtonInText").hasClass("ion-stop")) {
        $("#playButtonInText").attr("class", "button icon ion-play");
      }
      else {
          $("#playButtonInText").attr("class", "button icon ion-stop");
          //play
          function readOut()
          {
            var bookmarkStringer = bookmark.toString();
            var soundURL = "GreatExpectation".concat(bookmarkStringer,".mp3");
            console.log(soundURL);
            console.log(bookmark);
            var sound = new Howl({
              urls: [soundURL, 'sound.ogg']
            }).play();
            sound.onend(function(){
              bookmark = bookmark+1;
              if (bookmark == 60) {
                bookmark = 1;
              }
            });
            readOut();
          }
      }
    });

    // setInterval(function(){
    //   // if ($("#playButtonInText").hasClass("ion-stop")) {
    //   //   console.log("hello");
    //   //   var foo = new Sound("../sound/VivaLaVida.mp3",80,true);
    //   //   foo.start();
    //   // }
    //   //
    //   if ($("#playButtonInText").hasClass("ion-stop")) {
    //     var yourstring = sentenceTokens[bookmark];
    //     if (sentenceTokens[bookmark].length > 3) {
    //       $('p:contains('+yourstring+')', document.body).each(function(){
    //         console.log(bookmark);
    //         $(this).html($(this).html().replace(
    //           new RegExp(yourstring, 'g'), '<span style=\"background-color: #b5a0d6\">'+ yourstring +'</span>'
    //         ));
    //       });
    //     }
    //     bookmark = bookmark+1;
    //   }
    // },2000);


});
