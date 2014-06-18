$(document).ready(function(){
  var isi_open = false;
  var footer = "res/html/footer.html";
  var header = "res/html/header.html";
  var main =   "res/html/main.html";
  var global_elements = [header, main, footer];	

  function load_globals(){
    global_elements.forEach(function(entry){
      $.get(entry, function(data){
        $('body').append(data);
      });
    });
  };
  
 
//	$('body').on('touchmove', function(e){
//		e.stopPropagation();
//	});

var xStart, yStart = 0;
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
	
  $(document).on('click','#isi #header', function(){
	    $('#isi').toggleClass('start_anim');
        $('#isi_btn.icon').toggleClass('open');
  });

 load_globals();
 $(body).append('<p>this is working</p>');
});
