$(window).on("scroll",function(){
    if($(window).scrollTop()){
        $("nav").addClass("opacity-nav");
        $(".navbar-brand img").css({"width" : "60%"});
    }
    else{
        $("nav").removeClass("opacity-nav");
        $(".navbar-brand img").css({"width" : "80%"});
    }
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
});
	
// $(window).scroll(function() {    
// 	var scroll = $(window).scrollTop();

// 	if (scroll >= 200) {
// 		$(".fixed-header").slideDown();
// 	} else {
// 		$(".fixed-header").slideUp();
// 	}
// })
$(document).ready(function() {
    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});