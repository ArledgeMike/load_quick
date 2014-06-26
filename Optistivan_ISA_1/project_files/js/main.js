var isa = {
  
  show_controls: false,
  
  init: function(){
  
    console.log("isa called");
  
  },
  
  configure_click: function(event){
  
  },
  show_endpoints: function(show){
    if(show){
      $('#link_controls').fadeIn();
    }
  },
  lock_scroll: function(){
    $(document).on('touchmove', false);
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
    }
}
