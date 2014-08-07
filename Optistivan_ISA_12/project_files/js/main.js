var isa = {
  modal: false,
  acc_open: false,
  
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
  accordian: function(){
    $('.acc_btn').on('click' , function(){
      open = $(this);
      if(!isa.acc_open){
	isa.accordian_open(open);
      }else if(open.hasClass('open') && isa.acc_open ){
	   isa.accordian_close();   
      }else{
        isa.accordian_close();
	isa.accordian_open(open);
      }
    });
  },
  
  accordian_open: function(open){
	  console.log(open);
	  if(open.hasClass('open') ){
		  
           isa.accordian_close();
	   console.log("closed an already open drawer");
	  }else{
		  console.log("open that drawer");
    open.animate({
      height:150,
      backgroundPositionY: 0
    },300,function(){
      $(this).addClass('open');
    });
    open.find('span svg g path').css('fill', 'white');
 

    chil = open.find('.acc_content').children();
    for(var i=0; i< chil.length; i++){
      $(chil[i]).delay(500).animate({
        opacity:1
      });
    }
    isa.acc_open = true;
	  }
  },
  
  accordian_close: function(){
    $('.acc_btn.open span svg g path').css('fill', '#6c6d6f'); 	  
    open_chil = $('.acc_btn.open').find('.acc_content').children();
    for(var i=0; i< open_chil.length; i++){
      $(open_chil[i]).animate({
        opacity:0
      });
    }
    $('.acc_btn.open').animate({
      height:50,
      backgroundPositionY:-50
    }, 300);
    $('.acc_btn.open').removeClass('open'); 
  }

}

