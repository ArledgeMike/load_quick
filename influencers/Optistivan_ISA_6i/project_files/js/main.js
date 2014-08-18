var isa = {
	modal: false,
  
  init: function(){
  
    console.log("isa called");
    isa.start_animation();
  },
  start_animation: function(){
  
 //isa.animate_gen($('.graph #gen.liquid'), 6000) 
//isa.animate_opt(3200);
  },
  configure_click: function(event){
  
  },
  show_controls_efficacy: function(show){
    if(show){
      $('#link_controls').fadeIn();
    }
  },
  lock_scroll: function(){
    $('#content').on('touchmove', false);
	  //$(document).on('touchmove', false);
  },

  unlock_scroll: function(){
    $('#container').fullpage({
      scrollingSpeed:1000,
      onLeave: function(index, nextIndex, direction){
	isa.animate_test_out(index, nextIndex, direction);

      },
      afterLoad: function(anchorLink, index){
	isa.animate_test_in(anchorLink, index);
      }
      
    });
  },
  animate_test_in: function(anchorLink, index){
    $('.section.active').animate({
      opacity:1
    }); 

  },
  animate_test_out: function(index, nextIndex, direction){
      $('.section ').eq(index -1).animate({
	opacity:0      
      },1000);
    },
  open_modal: function(){
  
        isa.modal = true;  	  
    $('.modal_bg').fadeIn();
    
    
  
  },
  close_modal: function(event){
    
	  if(isa.modal){
      
        $('.modal_bg').fadeOut();
        isa.modal = false;
      
      event.stopPropagation();
    }

  
  },

	animate_opt: function(dur){
		
//		console.log("animate liquid");
//	 $this = el;
	 var w;
    var i=0;
  

  $('.graph #opt.liquid').delay(2000).animate({
  height:10
  },{
  easing: "easeOutCubic",
    duration:dur,
    start: function(){
      w =  window.setInterval(function(){
     $('#opt.bag p').text(i);
     i++
   },100);

 //     console.log("step");
  },
    complete: function(){
window.clearInterval(w);
      
    }
});  
	
	
	
	}
,	
	animate_gen: function(el, dur){
		console.log("animate liquid");
	 $this = el;
  var i=0;
 var w; 

  $this.delay(2000).animate({
  height:10
  },{
  easing: "easeOutCubic",
    duration:dur,
    start: function(){
       w =  window.setInterval(function(){
     $('#gen.bag p').text(i);
     i++
   },100);
 
      console.log("step");
  },
    complete: function(){
window.clearInterval(w);
      
    }
});  
	
	
	
	}	



}
