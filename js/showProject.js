$(document).ready(function(){
	$(".portfolio-box, .fa-close").click(function(){
		var titleid = $(this).attr("title");
		$("#"+titleid).fadeToggle();
		$("body").toggleClass("overflow-hidden");
	});
});