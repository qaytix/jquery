$(document).ready(function() {
	$("#tab").hide();
	$("#menu").change(function() {
		if ($(this).val() == "其它大学") {
			$("#tab").fadeIn("slow");
		} else {
			$("#tab").fadeOut("slow");
		}
	});
});