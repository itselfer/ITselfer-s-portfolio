var header_icon = function() {
	$("#btn_logo").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$(".hidden_label").attr('value', 'Edward John Jung');
			$(".hidden_label").css('color', '#2ba7e1');	
		}
		else {
			$(".hidden_label").attr('value', '');
			$(".hidden_label").css('color', '#ffc4ff');
		}
	});

	$("#homeCls").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$(".hidden_label").attr('value', 'home');
			$(".hidden_label").css('color', '#ffc4ff');
			$("#homeCls").attr('src', './resources/images/Icon_home_.png');
		}
		else {
			$(".hidden_label").attr('value', '');
			if (flag == 1)
				$("#homeCls").attr('src', './resources/images/Icon_home_.png');
			else if (flag == 2 || flag == 3 || flag == 4)
				$("#homeCls").attr('src', './resources/images/Icon_home.png');
		}
	});

	$("#aboutCls").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$(".hidden_label").attr('value', 'about');
			$(".hidden_label").css('color', '#f29661');
			$("#aboutCls").attr('src', './resources/images/Icon_profile_.png');
		}
		else {
			$(".hidden_label").attr('value', '');
			if (flag == 2)
				$("#aboutCls").attr('src', './resources/images/Icon_profile_.png');
			else if (flag == 1 || flag == 3 || flag == 4)
				$("#aboutCls").attr('src', './resources/images/Icon_profile.png');
		}
	});

	$("#portfolioCls").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$(".hidden_label").attr('value', 'portfolio');
			$(".hidden_label").css('color', '#59da50');
			$("#portfolioCls").attr('src', './resources/images/Icon_portfolio_.png');
		}
		else {
			$(".hidden_label").attr('value', '');
			if (flag == 3)
				$("#portfolioCls").attr('src', './resources/images/Icon_portfolio_.png');
			else if (flag == 1 || flag == 2 || flag == 4)
				$("#portfolioCls").attr('src', './resources/images/Icon_portfolio.png');	
		}
	});

	$("#contactCls").on('mouseenter mouseleave', function(e){
		if (e.type === 'mouseenter') {
			$(".hidden_label").attr('value', 'contact');
			$(".hidden_label").css('color', '#b2ccff');
			$("#contactCls").attr('src', './resources/images/Icon_email_.png');
		}
		else {
			$(".hidden_label").attr('value', '');
			if (flag == 4)
				$("#contactCls").attr('src', './resources/images/Icon_email_.png');
			else if (flag == 1 || flag == 2 || flag == 3)
			$("#contactCls").attr('src', './resources/images/Icon_email.png');
		}
	});
}