var isa = {
  
  init: function(){
  
    console.log("isa called");
  
  },
  
  configure_click: function(event){
  
  },

  lock_scroll: function(){
    // lock for pages that do not need scrolling
    $(document).on('touchmove', false);
  },

  unlock_scroll: function(){
    // start fullpage scolling
    $('#container').fullpage();
  }

}
