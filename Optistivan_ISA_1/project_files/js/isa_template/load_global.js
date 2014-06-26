$(document).ready(function(){
  
  var main =   "project_files/html/main.html";
  var global_elements = [main];	
  console.log("start loading global");
  function load_globals(){
    global_elements.forEach(function(entry){
      $.get(entry, function(data){
        $('.container').prepend(data);
      });
    });
  }
 
  $(document).on('click','#isi #header', function(){
    $('#isi').toggleClass('start_anim');
    $('#isi_btn.icon').toggleClass('open');
  });

  load_globals();
 
});
