var isa = {
	opt_start : 1,
	gen_start : 1,
        gen_timer: "#gen.bag p",
	opt_timer: "#opt.bag p",
	gen_liquid: ".graph #gen.liquid",
	opt_liquid: ".graph #opt.liquid",
  init: function(){
    isa.start_timer(isa.gen_start, isa.gen_timer);
    isa.start_timer(isa.opt_start, isa.opt_timer);
    isa.animate_liq(isa.opt_liquid, 10000);
   isa.animate_liq(isa.gen_liquid, 18400);
 
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
  start_timer: function(start_val, timer){
    console.log("start timer called");
  var  w = window.setInterval(function(){
    $(timer).text(start_val);  
      console.log("in the loop");
      start_val++;
       	if (timer == isa.gen_timer && start_val == 61){
        this.clearInterval(w);
   }
 	if (timer == isa.opt_timer && start_val == 31){
        this.clearInterval(w);
   }

    },250);
      
    },
  
  
  run_timer:function(){},
  animate_liq: function(target, dur){
   $(target).animate({
     height:0
   },dur);	
	
  },
  animate_gen: function(el, dur){
	
	
	
	}	



}
