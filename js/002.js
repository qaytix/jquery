$(document).ready(function() {
	$("p").css("color", "red").hover(function() {
		$(this).css("background", "#FF9900").fadeIn("slow");
	}, function() {
		$(this).css("background", "green").fedeOut("slow");
	});
});