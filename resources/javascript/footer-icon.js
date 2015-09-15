var footer_icon = function() {
	$("#icon-footer-facebook").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-footer-facebook").attr("src", "./resources/images/Icon_facebook_footer_.png");
		}
		else {
			$("#icon-footer-facebook").attr("src", "./resources/images/Icon_facebook_footer.png");
		}
	});
	$("#icon-footer-twitter").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-footer-twitter").attr("src", "./resources/images/Icon_twitter_footer_.png");
		}
		else {
			$("#icon-footer-twitter").attr("src", "./resources/images/Icon_twitter_footer.png");
		}
	});
	$("#icon-footer-tistory").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-footer-tistory").attr("src", "./resources/images/Icon_tistory_footer_.jpg");
		}
		else {
			$("#icon-footer-tistory").attr("src", "./resources/images/Icon_tistory_footer.jpg");
		}
	});
	$("#icon-footer-blog").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$("#icon-footer-blog").attr("src", "./resources/images/Icon_blog_footer_.png");
		}
		else {
			$("#icon-footer-blog").attr("src", "./resources/images/Icon_blog_footer.png");
		}
	});
}