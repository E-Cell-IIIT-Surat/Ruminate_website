/*-----------------------------------------------------------------------------------*/
/*  PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(window).on("load",(function(){
  'use strict';
  var portfolio_selectors = $('.portfolio-filter li a');
  if(portfolio_selectors!='undefined'){
    var portfolio = $('.portfolio-items');
    portfolio.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    portfolio_selectors.on('click', function(){
      portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      portfolio.isotope({ filter: selector });
      return false;
    });
  }
}));

$(function($) {
'use strict';
	$('.tile-progress .tile-header').matchHeight();

	var footerHeight = $('#footer-wrapper').outerHeight();
	$('#content-wrapper').css('margin-bottom', footerHeight );

	var windowsHeight = $(window).height();
	var navHeight = $('navbar-fixed-top').outerHeight();
	var newHeight = windowsHeight - navHeight + 30;
    $('#main-slider').css('height', newHeight + 'px');
    $('#single-page-slider').css('min-height', windowsHeight/3 + 'px');

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
		theme: 'light_square'
	});	

	$('.prevbg').click(function(x) { x.preventDefault(); $('body').data('backstretch').prev(); });
  	$('.nextbg').click(function(x) { x.preventDefault(); $('body').data('backstretch').prev(); });
});

/*-----------------------------------------------------------------------------------*/
/*  FANCY NAV
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function() {
'use strict';
    var scroll_pos = 0;
    $(document).scroll(function() { 
        var windowsHeight = $(window).height();
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > windowsHeight) {     	        
            $('.navbar-fixed-top').removeClass('opaqued');
        } else {
            $('.navbar-fixed-top').addClass('opaqued');
        }
    });

  	if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
	    $('#footer-wrapper').css('z-index','4');
	} else {
		$('#footer-wrapper').css('z-index','1');
	}

});

$(document).ready(function($){
'use strict';
  var windowsHeight = $(window).height();
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > windowsHeight) {              
      $('.navbar-fixed-top').removeClass('opaqued');
  } else {
      $('.navbar-fixed-top').addClass('opaqued');
  }
  if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
      $('#footer-wrapper').css('z-index','4');
    } else {
      $('#footer-wrapper').css('z-index','1');
   }
});


/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';
  $('#search-wrapper, #search-wrapper input').hide();

	$('span.search-trigger').click(function(){
		$('#search-wrapper').slideToggle(0, function() {
			var check=$(this).is(":hidden");
			if(check == true) {
		  		$('#search-wrapper input').fadeOut(600);
			} else {
				$("#search-wrapper input").focus();
				$('#search-wrapper input').slideDown(200);
			}
		});
	});

  $('#main-slider .carousel-content').flexVerticalCenter({ cssAttribute: 'padding-top' });

});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/
 

/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';
  $('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
  $('.bounce-in').one('inview', function() { 
    $(this).addClass('animated bounceIn appear');
  });
  $('.flip-in').one('inview', function() { 
    $(this).addClass('animated flipInY appear');
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.fade-up').one('inview', function() {
    $(this).addClass('animated fadeInUp appear');
  });
  $('.fade-down').one('inview', function() {
    $(this).addClass('animated fadeInDown appear');
  });

});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*  CAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
'use strict';
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

	$('#scroller').carousel({
	    pause: true,
	    interval: 4000,
	});

});

/*-----------------------------------------------------------------------------------*/
/*  CONTACT FORM
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';

  $('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
    $('#submit').attr('disabled','disabled');
    $.post(action, {
      name: $('#name').val(),
      email: $('#email').val(),
      website: $('#website').val(),
      comments: $('#comments').val()
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');
        $(window).trigger('resize');
      }
    );
    });
    return false;
  });
  
});

/*-----------------------------------------------------------------------------------*/
/*  PRELOADER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';
  $(window).on("load",(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  }));
});

const observer = lozad();
observer.observe();

$(document).ready(function ($) {
  'use strict';
  $('body').backstretch(
    "https://ik.imagekit.io/iqgqcaprmq/bg/bg1_O1HijuTYY.jpg",
    {
      duration: 5000,
      fade: 500,
      centeredY: true
  });

  $("#mapwrapper").gMap({
      controls: false,
      scrollwheel: false,
      markers: [{
          latitude: 40.7566,
          longitude: -73.9863,
          icon: {
              image: "images/marker.jpg",
              iconsize: [44, 44],
              iconanchor: [12, 46],
              infowindowanchor: [12, 0]
          }
      }],
      icon: {
          image: "images/marker.jpg",
          iconsize: [26, 46],
          iconanchor: [12, 46],
          infowindowanchor: [12, 0]
      },
      latitude: 40.7566,
      longitude: -73.9863,
      zoom: 14
  });
});
