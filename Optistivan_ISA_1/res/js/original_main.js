$(document).ready(function() {	
	/* CLICK OUTSIDE POPUP TO CLOSE IT */
	bindOutsideClick();
	//disable ipad scrolling
	disableIpadScrolling();
});

/* check if a specified element exists */
function exists(elem){
	if ( $(elem).length > 0 ) {
		return true;
	}else{
		return false;
	}
}



/*disable ipad scrolling*/
function disableIpadScrolling(){
	$(document).on('touchmove', function(e){
		e.preventDefault();
	});
}

/*close popup by clicking outside*/
function bindOutsideClick(){
	console.log('binded outside click');
	Hammer(document).on("touch", function(e) {
	    if ( $(event.target).closest(".popup.active, .popover.active").get(0) == null && exists(".popup.active")) {	
	    	$(".popup.active").find('.close').click();
	    	 $(".popup.active input").blur();
	    	//setTimeout(function() {$(".popup.active, .popup_bg_grey.active").removeClass('active'); }, 300);
	    	 $("menu.action:not(.action4) button.on").removeClass('on'); 
	    	 if(exists('.content video')) {
	    	 	$('.content video').removeClass('active');
	    	 }      
	    }
	    if ( $(event.target).closest(".popover.active").get(0) == null && exists(".popover.active")  ) {
	    	 $(".popover.active input").blur();
	    	 $(".popover.active").removeClass('active');
	    	 $("menu.action:not(.action4) button.on").removeClass('on');       
	    }
	    if ( $(event.target).closest(".popup_normal.active").get(0) == null && exists(".popup_normal.active")  ) {	    	
	    	 if(exists('.popup_normal.active .closeAcute')){
	    	 	$(".popup_normal.active").find('.closeAcute').click(); 
	    	 }else if(exists('.popup_normal.active .closeProphy')){
	    	 	$(".popup_normal.active").find('.closeProphy').click(); 
	    	 }else{
	    	 	$(".popup_normal.active").find('.close').click(); 
	    	 }	  	 
	    	 $(".popup_normal.active, .popup_bg_grey.active").removeClass('active');    
	    }
	});
}

/* ajax popups */
function getAjaxPage(trigger,target,callback){
	if(trigger.attr('data-ajax')!=undefined ){
		$.get('res/html/'+trigger.attr('data-ajax')+'.html',function(data){			
			if(trigger.attr('data-triggered')!='true'){
				$(target).append(data);	
			}
			if(callback!=null){
				callback();
				trigger.attr('data-triggered','true');
			}
			bindOutsideClick();
						
		});
	}
}



