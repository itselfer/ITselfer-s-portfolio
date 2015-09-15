$(document).ready(function() {
	$("#memo_new").click(function(){
		if ($(".active")[0].firstChild.data == "친구") {
			//memo overlay

		}
	});
	// if($("a").innerHTML == "친구") { 
	// 	alert('1');
	// }
	function openOverlay(olEl) {
        $oLay = $(olEl);
        
        if ($('#overlay-shade').length == 0)
            $('body').prepend('<div id="overlay-shade"></div>');

        $('#overlay-shade').fadeTo(300, 0.6, function() {
            var props = {
                oLayWidth       : $oLay.width(),
                scrTop          : $(window).scrollTop(),
                viewPortWidth   : $(window).width()
            };

            var leftPos = (props.viewPortWidth - props.oLayWidth) / 2;

            $oLay
                .css({
                    display : 'block',
                    opacity : 0,
                    top : '-=300',
                    left : leftPos+'px'
                })
                .animate({
                    top : props.scrTop + 40,
                    opacity : 1
                }, 600);
        });

        if ($(".active")[0].firstChild.data == "친구") {
			$(".wrapper_memo")[0].firstChild.data = "";
		}
    }

    function closeOverlay() {
        $('.overlay').animate({
            top : '-=300',
            opacity : 0
        }, 400, function() {
            $('#overlay-shade').fadeOut(300);
            $(this).css('display','none');
        });
    }
    
    $('#overlay-shade, .overlay a').live('click', function(e) {
        closeOverlay();
        if ($(this).attr('href') == '#') e.preventDefault();
    });

     // Usage
    $('#overlaylaunch-inAbox').click(function(e) {
       openOverlay('#overlay-inAbox');
       e.preventDefault();
    });
});

