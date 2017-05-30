$(function() {
	$(".panel").css({"height":$(window).height()});
$(".endl").css({"height":"200px"});
$(".Ab4").css({"height":"200px"});
	$.scrollify({
		section:".panel"
	});
	

	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});
});
