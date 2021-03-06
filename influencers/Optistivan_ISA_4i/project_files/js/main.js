isa = {
  fpage_index : 1,
  current_pos: 0, 
  init: function(){
    $('.controls .up').on('click', function(){
	  isa.scroll_down(event);
    });

   $('.controls .down').on('click', function(){
     isa.scroll_up(event);
   });
  },
  
  scroll_down: function(event){
    t = event.target;
	$(t).addClass('inactive');
	$(t).parent().find('.down').removeClass('inactive');
	graph = $(t).parent().parent().find('.body');
    $(graph).stop().animate({
      top: 0 	   
	});
  },
  
  scroll_up: function(event){
    t = event.target;
	$(t).addClass('inactive');
	$(t).parent().find('.up').removeClass('inactive');
	graph = $(t).parent().parent().find('.body');
	g_height = graph.height();
    $(graph).stop().animate({
      top: (g_height * .5) * -1 
	});
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
