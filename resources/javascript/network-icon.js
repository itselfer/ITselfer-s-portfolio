var network_icon = function() {
	$("#facebook").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-facebook").attr("src", "./resources/images/Icon_facebook_.png");
			$("#facebook span").css("color", "black");
		}
		else {
			$("#icon-facebook").attr("src", "./resources/images/Icon_facebook.png");
			$("#facebook span").css("color", "#2ba7e1");
		}
	});
	$("#twitter").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-twitter").attr("src", "./resources/images/Icon_twitter_.png");
			$("#twitter span").css("color", "black");
		}
		else {
			$("#icon-twitter").attr("src", "./resources/images/Icon_twitter.png");
			$("#twitter span").css("color", "#2ba7e1");
		}
	});
	$("#tistory").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-tistory").attr("src", "./resources/images/Icon_tistory_.jpg");
			$("#tistory span").css("color", "black");
		}
		else {
			$("#icon-tistory").attr("src", "./resources/images/Icon_tistory.jpg");
			$("#tistory span").css("color", "#2ba7e1");
		}
	});
	$("#blog").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-blog").attr("src", "./resources/images/Icon_blog_.png");
			$("#blog span").css("color", "black");
		}
		else {
			$("#icon-blog").attr("src", "./resources/images/Icon_blog.png");
			$("#blog span").css("color", "#2ba7e1");
		}
	});
}