(function(){
	var header = "res/html/header.html";
	var main = "res/html/main.html";
	var footer = "res/html/footer.html";
	var content = [header, main, footer];
    load_globals(content);
})();
function load_globals(content){
	content.forEach(function(entry){
		$.get(entry, function(data){
			$('body').append(data);
			
		});
		
	});
	
	
}