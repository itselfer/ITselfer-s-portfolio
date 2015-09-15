function getFB() {
	// code: AQBc0I-QBMuU_2ZNZFMmECui250JR6hJscQpPQH4uWE1nYAJVc6kwvXfymXBWgvSMQ34jDsXn_5X778idg7OcI6evFOkEfiSII1LEppTvbxWYfBXMOzTIJN8v8xfcF0-Ug1HNMpWVfkZodL3m0QP0x4iuxcyDet69fCKcVdI0JYZIkpSTVfRby8rzWJgBFGAQlJQc6cRNSKKfWiTM2cLDzGXIve8W5vBAnW5BGRnTN15FDiDlRumiiYGTr6IrZEgDAj9plQLEK6CHwg1Crlg6p8zxlFUYYXqfggxwmVg38oqX4NbSMOM7N0sKW3d8kbnCLE
	// access_token=CAAFstYbPd98BAAnCMBap2RSR40izgv89PUg6bxSkavKPdOlpTUCOZCs14mtP8UVDkWJSZCzEgaHPTrORTxbG8oXXoJ619SBYwZClZAr7efEO5jWgqEVdZA2cDGiiIgnRjwIiKwNYqm6tkD8ZAbJXr9wG1QgTuK7ZAYGZCXhuZAZC5hWPALOj9JNJJF&expires=5183680
    $.getJSON('https://graph.facebook.com/me/feed?scope=publish_stream,read_stream,offline_access&access_token=CAAFstYbPd98BAAnCMBap2RSR40izgv89PUg6bxSkavKPdOlpTUCOZCs14mtP8UVDkWJSZCzEgaHPTrORTxbG8oXXoJ619SBYwZClZAr7efEO5jWgqEVdZA2cDGiiIgnRjwIiKwNYqm6tkD8ZAbJXr9wG1QgTuK7ZAYGZCXhuZAZC5hWPALOj9JNJJF&expires=5183680', function(result) {
    	$('#facebook_Story').empty();
    	JSON.stringify(result);
    	$.each(result.data, function(idx, item){
    		var html = '';
    		if (item['message'] != null) {
    			var updated_time = new Date(item['updated_time']);
    			// console.log("time: " + updated_time);
    			// var now_time = new Date();

    			// var u_year = updated_time.getFullYear();
    			// var u_month = updated_time.getMonth();
    			// var u_day = updated_time.getDay();
    			// var u_hour = updated_time.getHours();
    			// var u_minute = updated_time.getMinutes();
    			// // var u_second = updated_time.getSeconds();

    			// var year = now_time.getFullYear();
    			// var month = now_time.getMonth();
    			// var day = now_time.getDay();
    			// var hour = now_time.getHours();
    			// var minute = now_time.getMinutes();
    			// // var second = now_time.getSeconds();

    			// if(u_day < day) {
    			// 	console.log((day - u_day) + "일 전");
    			// } else if(u_hour < hour) {
    			// 	console.log((hour - u_hour) + "시간 전");
    			// }
    			
    			html += '<div style="width:210px;">';
    			html += '<img style="width:40px; float: left; margin-bottom:5px; border-radius: 5px;" src="./resources/images/Profile.jpg">';
	    		html += '<h4 style="width:150px; float: left; margin-left: 5px; background-color:#d9e5ff; border-radius:7px; padding-top: 5px; padding-left: 5px; margin: 5px; margin-top:0px;">' + item['message'] + '</h4>';
	    		html += '<small style="width:200px; text-align:right; float:right; background-color:#eaeaea; border-radius:7px; margin: 5px; margin-top:0px;">' + updated_time + '</small>';
	    		html += '</div>';
	    		html += '<br>';
    		}
    		
			$('#facebook_Story').append(html);
    	});
    });
}