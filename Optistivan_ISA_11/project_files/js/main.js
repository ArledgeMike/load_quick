var isa = {
  touch_start: 0,
  touch_end:0,
  v: {},
  vid_timer: {},
  seeking: false, 
  
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
    pause_btn = new Hammer( document.getElementById("pause") );
    play_btn = new Hammer( document.getElementById("play") );
    forward_btn = new Hammer( document.getElementById("ff") );
    rewind_btn = new Hammer( document.getElementById("rw") );
    
    pause_btn.on('click', isa.video_pause);		    
    play_btn.on('click', isa.video_play);
    forward_btn.on('touchstart', isa.video_fast_forward );
    rewind_btn.on('touchstart', isa.video_rewind );
    $('body, html').on('touchend', isa.video_stop_seek );
	
    $('.graph ul li.btn').on('click', function(){
      if( $(this).hasClass('play') ){
        $('#vid_container').fadeIn(1000, function(){
          isa.v.play();
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
  	$('#pause.btn').css("display", "none");
  	$('#play.btn').css("display", "inline-block");
	  isa.v.pause();
    isa.vid_timer = setInterval(function(){
	    if(isa.v.currentTime === 0){
			isa.v.pause();
			isa.currentTime = 0;
	      console.log("all the way at the begining");
	      window.clearInterval(isa.vid_timer);
		  
		  return false;
	    }
     cur = isa.v.currentTime - 1.0;
     isa.v.currentTime = cur;
     console.log("going backward");
	 console.log(isa.v.currentTime);
	 console.log(isa.v.duration);
   }, 82);
   
  },
  video_fast_forward: function(){
  	$('#pause.btn').css("display", "none");
  	$('#play.btn').css("display", "inline-block");
	isa.v.pause();
   isa.vid_timer = setInterval(function(){
     if(isa.v.currentTime  >= isa.v.duration  ){
		 isa.v.pause();
		 isa.currentTime = isa.v.duration;
        console.log("all the way at the end");
    	window.clearInterval(isa.vid_timer);
		return false;
     }
	 cur = isa.v.currentTime + 1.0;
     isa.v.currentTime = cur;
	 console.log(isa.v.currentTime);
	 console.log(isa.v.duration);
	 console.log("going forward");
	 
   },82);
   console.log("outside of timer");
	
  },
  video_stop_seek: function(){
    //isa.v.play();
	console.log("stop");
    window.clearInterval(isa.vid_timer);
  },
  video_pause : function(){
    isa.v.pause();
	console.log("pause this")
	$('#pause.btn').css("display", "none");
	$('#play.btn').css("display", "inline-block");
	
  },
  video_play: function(){
   
      isa.v.play();
  	$('#pause.btn').css("display", "inline-block");
  	$('#play.btn').css("display", "none");
  },
  video_ended: function(){
    isa.v.pause();
	$('#pause.btn').css("display", "none");
	$('#play.btn').css("display", "inline-block");
    hammer_object.off('click', isa.video_control);
  },
  clean_up_video: function(event){
    $('#vid_container').fadeOut(function(){
//	  hammer_object.off("swipeup", isa.clean_up_video);
	});
  }
 
}
