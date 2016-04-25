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
console.log("Yes it goes through here.");
//readOut();

//var foo=new Sound("sound/SampleBookmp3/GreatExpectations1.mp3",100,true);
//foo.start();
//foo.stop();
//foo.start();
//foo.init(100,false);
//foo.remove();

$(document).ready(function(){
    var sentence = [];
    var audioHTMLString = [];
    //console.log(bookmark);
    bookmark = bookmark + 1;
    for (var i = 1; i < 80; i++) {
      //console.log(i);
      var stringHelper = i.toString();
      var help = 1;
      bookRef.child(stringHelper.concat("/text")).on("value", function(snapshot) {
        sentence[i] = snapshot.val();
        help = help+1;
        //console.log(sentence[i]);
        //console.log(help);
        $("#mainTextBook").append("<span onClick=\"foo(this)\" id=\"".concat(help,"\">",sentence[i],".</span>"));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      // console.log(sentence);
      // var finalHTML = "<span id=".concat();
      var audioId = "speech".concat(i.toString());
      var sourceId = "speechSource".concat(i.toString());
      var bookmarkStringer = i.toString();
      audioHTMLString[i] = "<audio id=\"".concat(audioId,"\"><source id=\"",sourceId,"\" src=\"js/sound/SampleBookmp3/GreatExpectations",bookmarkStringer,".mp3\" type=","\"audio/mpeg\"","></audio>");
      //console.log(audioHTMLString);
      //console.log(audioHTMLString[i]);
      $("#audioSection").append(audioHTMLString[i]);
    }

    // setInterval(function(){
    //   if ($("#playButtonInText").hasClass("ion-stop")) {
    //     console.log("hello");
    //     var foo = new Sound("sound/SampleBookmp3/GreatExpectations1.mp3",80,true);
    //     foo.start();
    //   }
    //   //
    //   // if ($("#playButtonInText").hasClass("ion-stop")) {
    //   //   var yourstring = sentenceTokens[bookmark];
    //   //   if (sentenceTokens[bookmark].length > 3) {
    //   //     $('p:contains('+yourstring+')', document.body).each(function(){
    //   //       console.log(bookmark);
    //   //       $(this).html($(this).html().replace(
    //   //         new RegExp(yourstring, 'g'), '<span style=\"background-color: #b5a0d6\">'+ yourstring +'</span>'
    //   //       ));
    //   //     });
    //   //   }
    //   //   bookmark = bookmark+1;
    //   // }
    // },2000);

    // var sentenceTokens = textString.split(".");

    // $("#playButtonInText").click(function(){
    //   if ($("#playButtonInText").hasClass("ion-pause")) {
    //     console.log("HELLO");
    //     $("#playButtonInText").attr("class", "button icon ion-play");
    //   }
    //   else {
    //       $("#playButtonInText").attr("class", "button icon ion-pause");
    //       console.log("WASSSUPPPP");
    //       // var temp = "sound/SampleBookmp3/GreatExpectations1.mp3";
    //       // console.log(soundURL);
    //       // console.log(temp);
    //       // var audio = new Audio(temp);
    //       // audio.play();
    //       // var x = document.createElement("AUDIO");
    //       //play
    //       //readOut();
    //   }
    // });
});



// function readOut()
// {
//   console.log("wathap!");
//   var audio = document.getElementById("speech");
//   console.log(audio);
//   //var source = document.getElementById("speech").src;
//   //console.log(source);
//   bookmark = bookmark+1;
//   var bookmarkStringer = bookmark.toString();
//   var soundURL = "sound/SampleBookmp3/GreatExpectations".concat(bookmarkStringer,".mp3");
//   console.log(soundURL);
//   console.log(bookmark);
//   // var foo = new Sound(soundURL,80,true);
//   // foo.start();
//   //source = soundURL;
//   //audio.play();
//
//   // var bookmarkStringer = bookmark.toString();
//   // var soundURL = "sound/SampleBookmp3/GreatExpectations".concat(bookmarkStringer,".mp3");
//   // var temp = "sound/SampleBookmp3/GreatExpectations1.mp3";
//   // console.log(soundURL);
//   // console.log(temp);
//   // var audio = new Audio(temp);
//   // audio.play();
//   // console.log(book);
//   // var audio = new Howl({
//   //   urls: [temp],
//   //   onend: function() {
//   //     alert('Finished!');
//   //   }
//   // }).play();
//   // audio.onend(function(){
//   //   bookmark = bookmark+1;
//   //   if (bookmark == 60) {
//   //     bookmark = 1;
//   //   }
//   // });
// }
