var isa = {
	fpage_index: 1,
  
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
   $('#link_controls ul li a#mcrpc.icon').on("click", isa.go_to );
   $('#link_controls ul li a#nsclc.icon').on("click", isa.go_to ); 
    $('#container').fullpage({
      scrollingSpeed:1000,
      onLeave: function(index, nextIndex, direction){
	      isa.fpage_index = nextIndex;
	      console.log(isa.fpage_index);
       if( direction == "down" ){
       $('#link_controls li a#mcrpc').removeClass('active');
       $('#link_controls li a#nsclc').addClass('active');
       }
       if( direction == "up" ){
         $('#link_controls li a#mcrpc').addClass('active');
         $('#link_controls li a#nsclc').removeClass('active');
       }	      





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
  go_to: function(){
    switch(isa.fpage_index){
   case 1:
            $.fn.fullpage.moveTo(2, 2);
	    break;	    
   case 2:
            $.fn.fullpage.moveTo(1, 2);
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

  }
	


}
