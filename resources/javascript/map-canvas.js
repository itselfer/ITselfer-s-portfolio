var map_canvas = function() {
	var map;
	function initialize() {
		var mapOptions = {
		    zoom: 8,
		    center: new google.maps.LatLng(35.414318, 129.277223),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    scrollwheel: false
		};
	  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  	var image = './resources/images/Icon_flag.png';
		var myLatLng = new google.maps.LatLng(35.414318, 129.277223);
		var beachMarker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    icon: image,
		    title: 'Click to detail'
		});
	    attachSecretMessage(beachMarker);
	}
	function attachSecretMessage(beachMarker) {
		var message = '<b>My Office & House</b><br><br><img src="./resources/images/Img_house.jpg">';
		var infowindow = new google.maps.InfoWindow({
			content: message
		});

		google.maps.event.addListener(beachMarker, 'click', function() {
			map.setZoom(14);
			// map.setCenter(beachMarker.getPosition());
			infowindow.open(beachMarker.get('map'), beachMarker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
}