$(function() {
	var myVideo =  iframe.getElementById('myVideo'); 
	myVideo.mute();

	$('.list').mouseover( function(e) {
		$(".hover").removeClass("hover");
		$(e.target).addClass("hover");
		return false;
	}).mouseout(function(e) {
		$(this).removeClass("hover");
	});
	$('.img').hover( function() {
		$(this).animate({
			opacity: 50,
			left: "+=50",
			height: "toggle"
		}, 5000, function() {
				//Animation complete
			})
	})
});