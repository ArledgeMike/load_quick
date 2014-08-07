var isa = {
  video_play: false,
  touch_start: 0,
  touch_end:0,
  v: "", 
  
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
      isa.v = document.getElementsByTagName("video")[0];
      
      hammer_object = Hammer(isa.v);
       
      $('.graph ul li.btn').on('click', function(){
        if ( $(this).hasClass('play') ){
          
	  console.log("play the movie");
	  
	  $('#vid_container').fadeIn(1000, function(){
            isa.v.play();
	    isa.video_play = true;
          });

	}else{
	   
	  rel = $(this).attr('rel');
	  bg = $(this).attr('data-bg');
          gif = $(this).attr('data-gif');
	  id = $(this).attr('data-id');

	  $('.graph ul li.btn.play').removeClass('play');
	  $(this).addClass('play');
          console.log(rel,  bg);
          $('#vid_container video').attr('src', rel);
	  $('.cell').fadeOut(function(){
	     $('.cell').attr("id", id).css("background-image", "url(project_files/images/" + gif + ")").fadeIn();	
	  
	  });
          $('#background').fadeOut(function(){
         	  
	    $(this).css("background-image" , "url(project_files/images/"+ bg + ")" ).fadeIn();
	     
	  });
	}
      });
     

   hammer_object.on('click', isa.video_control);
   
   $('#vid_container .exit_btn').on('click',function(){
     isa.v.pause();
     isa.v.currentTime = 0;
     isa.clean_up_video();
   });  
  
   isa.v.addEventListener("ended", isa.video_ended);
      
       
  },
  change_background: function(){
  
  },
  video_control: function(){
    if(isa.video_play){
        isa.v.pause();
        isa.video_play = false;
      }else{
        isa.v.play();
        isa.video_play = true;
      console.log("clicked");
      }

  },
  video_ended: function(){
    isa.v.pause();
     isa.video_play = false;
       hammer_object.off('click', isa.video_control);
  //   $('#vid_container').addClass('end');
  //   $('.end').on('click', function(){
  //     $(this).fadeOut(function(){ $('#vid_container').removeClass('end');     });
  //   });
     //hammer_object.on("swipeup", isa.clean_up_video);

  },
  clean_up_video: function(event){
  
   $('#vid_container').fadeOut(function(){
	  hammer_object.off("swipeup", isa.clean_up_video);
	  console.log("cleaned up");

	});
  }
 
  }
