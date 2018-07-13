(function($) {
	
	//Main elements
	var responsiveBar = $('#responsive-bar');
	var responsiveMenu = $('#responsive-menu');
	var responsiveMenuButton = $('#responsive-menu-button');
	var topMenu = $('#top-menu');
	var scrollingLogos = $('#scrolling-logos');
	var scrollingLogosInner = $('#scrolling-logos-inner');
	    
	//Classes
	var activateClass = 'activate';
	
	//Toggle display-none class ON/OFF
	var toggleDisplayNone = (elem, flag) => elem[flag + 'Class']('display-none');
	
	
    /* Home */
    
    $(document).ready(function(){
    	
    	/* Lightbox */
    
    	$('.page a[href$=".jpg"],a.lightbox').magnificPopup({
    		type: 'image',
    	    gallery: {
    	      enabled: true
    	    },
    		zoom: {
    		    enabled: false, // By default it's false, so don't forget to enable it
    		
    		    duration: 300, // duration of the effect, in milliseconds
    		    easing: 'ease-in-out', // CSS transition easing function
    		
    		    // The "opener" function should return the element from which popup will be zoomed in
    		    // and to which popup will be scaled down
    		    // By defailt it looks for an image tag:
    		    opener: function(openerElement) {
    		      // openerElement is the element on which popup was initialized, in this case its <a> tag
    		      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
    		      return openerElement.is('img') ? openerElement : openerElement.find('img');
    		    }
    		}				
    		// other options
    	});
    
    	/* Scrolling logos */
    	
    	toggleDisplayNone(scrollingLogos, 'remove');
    
    	scrollingLogosInner.not('.slick-initialized').slick({
    		infinite: true,
    		slidesToShow: 4,
    		slidesToScroll: 1,
    		autoplay: true,
    		autoplaySpeed: 2000,
    		pauseOnHover: false,
    		appendArrows: scrollingLogos,
    		prevArrow: '<a class="prev-next" id="prev"></a>',
    		nextArrow: '<a class="prev-next" id="next"></a>',
    		responsive: [
    		    {
    		      breakpoint: 930,
    		      settings: {
    		        slidesToShow: 3,
    		      }
    		    },
    		    {
    		      breakpoint: 738,
    		      settings: {
    		        slidesToShow: 2,
    		      }
    		    },
    		    {
    		      breakpoint: 486,
    		      settings: {
    		        slidesToShow: 1,
    		      }
    		    }
    		]
    	});	
    	
    	$(window).load(function (){
    		
    		/*$('.slick-slide').eq(0).width();*/
    		
    		/*scrollingLogosInner.children('img').each(function(){
    			
    			var logoHeight = $(this).height();
    			var logoWidth = $(this).width();
    			
    			if(logoWidth == 216 ) {
    				
    				var paddingTop = (65 - logoHeight)/2;
    				
    				$(this).css('padding-top', paddingTop);
    				
    			} else if (logoHeight == 65 ) {
    				
    				var paddingLeft = (216 - logoWidth)/2;
    				
    				$(this).css('padding-left', paddingLeft);
    				
    			} else if ((logoWidth < 216) && (logoHeight < 65)) {
    				
    				var paddingLeft = (216 - logoWidth)/2;
    				var paddingTop = (65 - logoHeight)/2;
    				$(this).css({
    					'padding-left': paddingLeft,
    					'padding-top': paddingTop
    				});
    				
    			}
    			
    		});*/
    		
    	});
    	
    	/*$(window).load(function (){
    		
    		toggleDisplayNone(scrollingLogos, 'remove');
    	
    		scrollingLogosInner.cycle({
    		    speed: 500,
    		    timeout: 2000,
    		    slides: '> div',
    		    fx: 'carousel',
    		    swipe: true,
    		    carouselVisible: 4,
    		    carouselFluid: true,
    		    next: '#next',
    		    prev: '#prev'
    		});
    	
    		
    		scrollingLogosInner.children('img').each(function(){
    			
    			var logoHeight = $(this).height();
    			var logoWidth = $(this).width();
    			
    			if(logoWidth == 216 ) {
    				
    				var paddingTop = (162 - logoHeight)/2;
    				
    				$(this).css('padding-top', paddingTop);
    				
    			} else if (logoHeight == 162 ) {
    				
    				var paddingLeft = (216 - logoWidth)/2;
    				
    				$(this).css('padding-left', paddingLeft);
    				
    			}
    			
    		});
    		
    	});*/
    
    			
    	
    	
    
		/* Responsive */

    	toggleDisplayNone(responsiveBar, 'remove');

    	responsiveMenuButton.click(function(){

    		responsiveMenu.toggleClass(activateClass);
    		responsiveMenuButton.toggleClass(activateClass);

    		$('html, body').toggleClass('scroll');
    		
    	});
    	
    
    
    	function widthchecker() {
    		
    		
    		
    		responsiveMenu.removeClass(activateClass);
    		
    		if ($(window).width() <= 900) {
    		
				toggleDisplayNone(responsiveBar.add(responsiveMenu).add(responsiveMenuButton), 'remove');

    			topMenu.children('.menu-top-menu-container').appendTo(responsiveMenu);
    			
    			
    		}
    		
    		if ($(window).width() > 900) {
    			
    			
    			toggleDisplayNone(responsiveBar.add(responsiveMenu).add(responsiveMenuButton), 'add');

    			responsiveMenu.children('.menu-top-menu-container').appendTo(topMenu);
    			
    			responsiveBar.children('#user-menu').appendTo(topMenu);
    			
    		}
    		
    			
    	}
	    	    	
    	$(widthchecker);
    					
    	$(window).resize(widthchecker); 
    	
    });
	
})(jQuery);