var isa = {
  video_play: false,
  touch_start: 0,
  touch_end:0, 
  
  init: function(){
  
    console.log("isa called");
  
  },
  
  configure_click: function(event){
  
  },

  lock_scroll: function(){
    // lock for pages that do not need scrolling
    $(document).on('touchmove', false);
  },

  unlock_scroll: function(){
    // start fullpage scolling
    $('#container').fullpage();
  },
  
  setup_video: function(){
    var v = document.getElementsByTagName("video")[0];
    
      $('.graph ul li.btn').on('click', function(){
      rel = $(this).attr('rel');

      console.log(rel);
      $('#vid_container video').attr('src', rel);
      $('#vid_container').fadeIn(1000, function(){
        v.play();
	isa.video_play = true;
      });
    });
    $('.exit_btn, #vid_container').on('click', function(){
      if(isa.video_play){
        v.pause();
        isa.video_play = false;
      }else{
        v.play();
        isa.video_play = true;
      }
      console.log("clicked");
    });
  v.addEventListener("ended", function(){
   v.pause();
   isa.video_play = false;
   $('#vid_container').addClass('end');
   $('.end').on('click', function(){
      $(this).fadeOut(function(){ $('#vid_container').removeClass('end');     });
   });   
  });


  
  
  }
  
}
