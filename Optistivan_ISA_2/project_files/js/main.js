var isa = {
	fpage_index: 1,
  
  init: function(){
    console.log("isa called");
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
  },

  unlock_scroll: function(){

 
   $('#container').fullpage({
    
   scrollingSpeed:1000,
      onLeave: function(index, nextIndex, direction){
	      console.log("ON LEAVE" + index + nextIndex + direction);
	      isa.fpage_index = nextIndex;
	      console.log(isa.fpage_index);
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
	//      console.log("AFTER LOAD" + anchorLink + index);
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
	  console.log("go to called");
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
