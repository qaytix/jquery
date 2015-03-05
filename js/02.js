$(document).ready(function() {
	$("p").css("color","red").mouseover(function(){
		$(this).css("color","#FF9900");
	}).mouseout(function(){
		$(this).css("color","green");
	});
});