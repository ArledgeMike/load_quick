var isa = {
  fpage_index: 1,
  
  init: function(){
	  
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
    $('#container').fullpage({
      scrollingSpeed:1000,
      navigation: true,
      navigationPosition: "left",
      onLeave: function(index, nextIndex, direction){
	    isa.fpage_index = nextIndex;
        if( (index >= 3) && (direction == "down") ){
          $('#link_controls li a#mcrpc').removeClass('active');
          $('#link_controls li a#nsclc').addClass('active');
        }
        if( (nextIndex == 3) && (direction == "up") ){
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
    
	if(document.location.hash == "#nsclc"){
		alert("there is a hash");
      $.fn.fullpage.moveTo(4, 0);
      $('#link_controls li a#mcrpc').removeClass('active');
      $('#link_controls li a#nsclc').addClass('active');
    }
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
        $.fn.fullpage.moveTo(4, 0);
	    break;	    
      case 2:
        $.fn.fullpage.moveTo(5);
	    break;
      case 3:
        $.fn.fullpage.moveTo(6);
	    break;	 
      case 4:
        $.fn.fullpage.moveTo(1);
	    break;	
      case 5:
        $.fn.fullpage.moveTo(2);
	    break;	
      case 6:
        $.fn.fullpage.moveTo(3);
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
