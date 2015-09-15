// var response_data = "";
var mycallback = function(data) {
      	$(".close").click();
		console.log(data);
		console.log("callback success");
	}
var submitData = function(gb_idx) { // gb_idx : 선택한 div index
	// var success = "";
	$.ajax({//$("#text_memo_name")[0].value
		url		: "http://localhost:3000/write/" + gb_idx + "/" + $("#frm_guset_name")[0].value + "/" + $("#frm_guset_email")[0].value + "/" + $("#frm_guset_contents")[0].value,
		// type: 'GET',
        // crossDomain: 'true',
        dataType: 'jsonp',
        // contentType: "application/json",
        // cache: false,
        jsonpCallback: "myCallback",
        // callback : "callback",
        success: function(data){
        	console.log("data:");
        	console.log(data);      	
        	// response_data = data;
        	// select로 방명록에 작성한 데이터 박기 2015.09.13
        	// for(i=0; i<$("#wrapper-guest > div").length; i++){
	        // 	if ($("#wrapper-guest > div")[i].childNodes.length == 8) {
	        // 		$("#wrapper-guest > div")[i].remove();
	        		
	        // 		$("#wrapper-guest > div")[i].innerHTML = 
	        // 			"<div style='padding: 2%; color: white;'>" +
	        // 			"작성자 " + data.write._name + "<br />" +
	        // 			"내용 " + data.write.contents +
	        // 			"</div>";
	        		

	        // 	}
        	// }
        	for(var i=0; i<$("#wrapper-guest > div").length; i++) {
    			if ($("#wrapper-guest > div")[i].childNodes.length == 8) {
        			$("#wrapper-guest > div")[i].remove();
        		}
        		$("#wrapper-guest > div")[data.write._idx].innerHTML = 
        			"<div style='margin: 10%; height: 80%; width: 80%;'>" +
        			"작성자: " + data.write._name + "<br />" +
        			"내용: " + data.write.contents + "" + 
    				"</div>";
    		}
        	
        },
        complete: function(req, txt) {
        	console.log("req:");
        	console.log(req);
        	alert('방명록 작성 완료.');
        	


        },
		// url		: "http://127.0.0.1:3000/write/" + $("#textarea_memo")[0].value,
		// type	: "get",
		// jsonp: "callback",
		// async	: false,
		// contentType: "application/jsonp",
		// dataType: 'jsonp',
		// crossDomain: true,
		// data	: $("#form_memo").serialize(),
		// success: function(result){
		// 	console.log(result);
	 //       	$(".close").click();
		// },
		// jsonpCallback: 'JsonpCallback'
		error: function(e, xhr) // success is not defined 오류 - 나중에 해결
	    {//.split('"')
	    	console.log("error");
	    	var resValue = e.responseText;
	        // console.log(e.responseText + "////" + resValue[1]);
	        console.log(xhr);
	        console.log(e);

	        $(".close").click();

	        if(e.responseText != ""){
	        	alert("방명록을 작성해 주셔서 감사드립니다.");
	        	$(".close").click();
	        	// $("#memojang").append("<div id='memo_result' class='memo_result'></div>");
	        	// $("#memo_result").text("이름: " + resValue[3] + "DB에서 긁어올 방명록 데이터: " + resValue[1]);
	        }
	    }
	});
	// $.getJSON("http://127.0.0.1:3000/write/" + $("#textarea_memo")[0].value + "/callback=?", function(data){
	// 	console.log(data);
	// });

	
	
}