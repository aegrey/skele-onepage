
/* --------------------------------------
| IE SPECIFIC FUNCTIONS
| Scripts for IE Compatibility
| ------------------------------------- */

//console.log fallback
var alertFallback = true;
if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     if (alertFallback) {
         console.log = function(msg) {
              alert(JSON.stringify(msg));
         };
     } else {
         console.log = function() {};
     }
}