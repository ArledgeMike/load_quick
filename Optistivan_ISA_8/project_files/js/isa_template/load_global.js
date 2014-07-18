$(document).ready(function(){
  
  var main =   "project_files/html/main.html";
  var global_elements = [main];	
  var isi_open = false;
  
  function load_globals(){
    global_elements.forEach(function(entry){
      $.get(entry, function(data){
        $('#content').prepend(data);
      });
    });
  }

  function next_slide(){
    active = $('.modal_content ul li.active'); 
    if ( active.hasClass('last')){
      active.removeClass('active');
      $('.modal_win .modal_content ul li:first-child').addClass('active');
    }else{
      active.removeClass('active').next().addClass('active');
    }
  }

  function prev_slide(){
    active = $('.modal_content ul li.active'); 
    if ( active.hasClass('first')){
      active.removeClass('active');
      $('.modal_win .modal_content ul li:last-child').addClass('active');
    }else{
      active.removeClass('active').prev().addClass('active');
    }

  }

  function open_modal(){
    html = $(this).attr('rel');
         $.fn.fullpage.setAllowScrolling(false); 
    $.get(html, function(data){
      $('.modal_content').prepend(data);
      isa.modal = true;  	  
      $('.modal_bg').fadeIn();
      $('.modal_win .modal_content #controls .prev_btn').on('click', prev_slide);
      $('.modal_win .modal_content #controls .next_btn').on('click', next_slide);
    });
  }

  function close_modal(event){
      $.fn.fullpage.setAllowScrolling(true);
      $('.modal_bg').fadeOut();
      isa.modal = false;
      $('.modal_win .modal_content #controls .prev_btn').off('click', prev_slide);
      $('.modal_win .modal_content #controls .next_btn').off('click', next_slide);
      event.stopPropagation();
  }
  
  function open_isi(){
    if (isi_open){

    //  $.fn.fullpage.setAllowScrolling(true);
      isi_open = false;
      
    }else{
    
   //   $.fn.fullpage.setAllowScrolling(false);
      isi_open = true;
          
    }
    $('#isi').toggleClass('start_anim');
    $('#isi_btn.icon').toggleClass('open');
  }


  $('.modal_win .exit_modal').on("click", close_modal);
  $('footer ul li a').on("click", open_modal);
  $('#isi #header').on('click', open_isi);
 

  load_globals();

 
});
