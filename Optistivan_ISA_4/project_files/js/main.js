isa = {
  fpage_index : 1,
  current_pos: 0, 
  graph_pos: 344,
  init: function(){
    $('.section .up').on('click', function(){
	  isa.scroll_down(event);
    });

   $('.section .down').on('click', function(){
     isa.scroll_up(event);
   });
  },
  
  scroll_down: function(event){
    t = event.target;
	graph = $(t).parent().find('.body');
	
	increment = 85;
	inc = parseInt( $(graph).css("top") );
	dist = (inc + increment) ;
	
	if(dist > 0){
		$(t).addClass('inactive');
	    
		$(graph).stop().animate({
	      top: 0  
		});
	}else{
		$(t).parent().find('.down').removeClass('inactive');
	    $(graph).stop().animate({
	      top: dist   
		});
	}
   
  },
  
  scroll_up: function(event){
	console.log("scroll up");
    t = event.target;
	graph = $(t).parent().find('.body');
	//offset = $(graph).offset().top;
	//console.log("this is the body offset "  + offset );
	//mes = offset * 0.25	
	increment = 100;
	inc = parseInt( $(graph).css("top") ) * -1;
	dist = (inc + increment) * -1;
	limit = (graph.height()* -1) + 200; 

		//console.log(inc + mes);
	//$(t).addClass('inactive');
	//$(t).parent().find('.up').removeClass('inactive');
	if(dist > limit){
	  $(t).parent().find('.up').removeClass('inactive');
      $(graph).stop().animate({
        top: dist
	  });
	}else{
      $(t).addClass('inactive');
      $(graph).stop().animate({
        top: limit
	  });
	}
  },
  
  show_controls_efficacy: function(show){
    if(show){
      $('#link_controls').fadeIn();
    }
  },

  lock_scroll: function(){
    $('#content').on('touchmove', false);
  },

  unlock_scroll: function(){
    $('.graph #controls .up').on('click', isa.scroll_graph_down);
    $('.graph #controls .down').on('click', isa.scroll_graph_up);
    $('.graph .header').on('click', isa.reset_graph);

    $('#container').fullpage({
      scrollingSpeed:1000,
      onLeave: function(index, nextIndex, direction){
	    console.log("ON LEAVE" + index + nextIndex + direction);
		isa.fpage_index = nextIndex;
        $('.graph .body').animate({top: 0});
		if( (index >= 2) && (direction == "down") ){
          $('#link_controls li a#mcrpc').removeClass('active');
          $('#link_controls li a#nsclc').addClass('active');
        }
        
		if( (nextIndex == 2) && (direction == "up") ){
          $('#link_controls li a#mcrpc').addClass('active');
          $('#link_controls li a#nsclc').removeClass('active');
        }	

	    isa.animate_test_out(index, nextIndex, direction);

      },
      afterLoad: function(anchorLink, index){
	    isa.animate_test_in(anchorLink, index);
      }
      
    });
	
  $('#link_controls ul li a#mcrpc.icon').on("click", isa.go_to );
  $('#link_controls ul li a#nsclc.icon').on("click", isa.go_to ); 
  
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
  
  go_to: function(){
    
	switch(isa.fpage_index){
      case 1:
        $.fn.fullpage.moveTo(3, 4);
	    break;	    
      case 2:
        $.fn.fullpage.moveTo(4, 4);
	   break;
      case 3:
        $.fn.fullpage.moveTo(1, 4);
	    break;	 
      case 4:
        $.fn.fullpage.moveTo(2, 4);
	    break;	
    }
	
   id = event.target.id;
   if (id == "mcrpc"){
     $('#link_controls ul li a.active').removeClass('active');
	 $('#link_controls ul li a#mcrpc').addClass('active');
   }else{
   	 $('#link_controls ul li a.active').removeClass('active');
	 $('#link_controls ul li a#nsclc').addClass('active');
   }
   
   event.preventDefault(event);
  
  }

}
