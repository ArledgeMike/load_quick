var isa = {
	modal: false,
  
  init: function(){
  
    console.log("isa called");
    $('footer ul li a').on("click", isa.open_modal);
    $('.modal_win').on("click", isa.close_modal);
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

  
  }


}
