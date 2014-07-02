$(document).ready(function(){
  
  var main =   "project_files/html/main.html";
  var global_elements = [main];	
  
  function load_globals(){
    global_elements.forEach(function(entry){
      $.get(entry, function(data){
        $('#content').prepend(data);
      });
    });
  }
 
  $(document).on('click','#isi #header', function(){
    $('#isi').toggleClass('start_anim');
    $('#isi_btn.icon').toggleClass('open');
  });

  load_globals();
 
});
