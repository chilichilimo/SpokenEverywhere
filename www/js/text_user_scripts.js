/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* graphic button  #play */
    $(document).on("click", "#play", function(evt)
    {
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
