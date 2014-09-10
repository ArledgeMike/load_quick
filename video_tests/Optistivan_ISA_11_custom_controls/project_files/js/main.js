var isa = {
  video_play: false,
  touch_start: 0,
  touch_end:0,
  v: {},
  vid_timer: {}, 
  
  init: function(){  
	
  },
  lock_scroll: function(){
    $(document).on('touchmove', false);
  },
  unlock_scroll: function(){
    $('#container').fullpage();
  },
  setup_video: function(){
      
    isa.v = document.getElementsByTagName("video")[0];
   // p_btn = document.getElementById("pause");
  //  hammer_object = new Hammer(isa.v);
    pause_btn = new Hammer( document.getElementById("pause") );
    play_btn = new Hammer( document.getElementById("play") );
    forward_btn = new Hammer( document.getElementById("ff") );
    rewind_btn = new Hammer( document.getElementById("rw") );
    
    pause_btn.on('click', isa.video_pause);		    
    play_btn.on('click', isa.video_play);
    forward_btn.on('touchstart', isa.video_fast_forward);
    rewind_btn.on('touchstart', isa.video_rewind );
    $('body, html').on('touchend', isa.video_stop_seek );
    $('.graph ul li.btn').on('click', function(){
      if( $(this).hasClass('play') ){
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
        $('#vid_container video').attr('src', rel);
	$('.cell').fadeOut(function(){
	  $('.cell').attr("id", id).css("background-image", "url(project_files/images/" + gif + ")").stop().fadeIn(1000);	
	});
        $('#background').fadeOut(function(){   	  
	  $(this).css("background-image" , "url(project_files/images/"+ bg + ")" ).fadeIn();
	});
      }
    });
     
  //  hammer_object.on('click', isa.video_control);
   
    $('#vid_container .exit_btn').on('click',function(){
      isa.v.pause();
      isa.v.currentTime = 0;
      isa.clean_up_video();
    });  
  
    isa.v.addEventListener("ended", isa.video_ended);
          
  },
  video_other: function(){
  
  },
  video_rewind: function(){
    isa.vid_timer = setInterval(function(){
     cur = isa.v.currentTime - .05;
     isa.v.currentTime = cur;
     console.log("going forward");
   });
  },
  video_fast_forward: function(){
   isa.vid_timer = setInterval(function(){
     cur = isa.v.currentTime + .05;
     isa.v.currentTime = cur;
     console.log("going forward");
   });
  },
  video_stop_seek: function(){
	  console.log("stop");
    window.clearInterval(isa.vid_timer);
  },
  video_pause : function(){
    isa.v.pause();
  },
  video_play: function(){
    if(isa.v.paused == true){
      isa.v.play();
      //isa.video_play = false;
    }else{
      isa.v.pause();
     // isa.video_play = true;
    }
  },
  video_ended: function(){
    isa.v.pause();
    isa.video_play = false;
    hammer_object.off('click', isa.video_control);
  },
  clean_up_video: function(event){
    $('#vid_container').fadeOut(function(){
//	  hammer_object.off("swipeup", isa.clean_up_video);
	});
  }
 
}
