$(document).on("ready", function(){
var xStart, yStart = 0;
               console.log("we are ready to jam!");
document.addEventListener('touchstart',function(e) {
                          xStart = e.touches[0].screenX;
                          yStart = e.touches[0].screenY;
                          });

document.addEventListener('touchmove',function(e) {
                          var xMovement = Math.abs(e.touches[0].screenX - xStart);
                          var yMovement = Math.abs(e.touches[0].screenY - yStart);
                          if((yMovement * 3) > xMovement) {
                          e.preventDefault();
                          }
                          });

});