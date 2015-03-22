
/* --------------------------------------
| NAV & SCROLLING FUNCTIONS
| Objects controlling nav and scrolling
| ------------------------------------- */

//VARIABLES
var $site = $('html, body');
var $view = $(window);
var scrolling = false;

// OFFSETS
// Returns section offsets
// Optional: Page
// -------------------------
var Offsets = function(page) {
	var data;

	//SINGLE
	//requires page (ID)
	var singlePage = function(page) {
		data = $('#'+page).offset().top;
		return data;
	};

	//ALL
	//returns all positions
	var allPages = function() {
		var id;
		positions = [];
		pages = [];
		heights = [];

		$('.section').each(function(i){
			id = $(this).attr('id');
			positions.push(singlePage(id));
			pages.push(id);
			heights.push($(this).outerHeight());
		});

		data = { height: heights, y: positions, id: pages };
		return data;
	};


	if(page) {
		return singlePage(page);
	} else {
		return allPages();
	}
};

// NAVIGATION & SCROLLING
// Controls main nav & content links
// ----------------------------------
var Navigation = function() {

	$('#navlist li a').click(function(e){    
		e.preventDefault();

		//change active nav item
		$('#navlist li a').removeClass('active');
		$(this).addClass('active');

		//scroll to relevant area
		scrolling = true;
		var page = $(this).data('id');
		var scrollTo = Offsets(page);

		$view.disablescroll({ handleScrollbar: false });
		
		//scroll to defined page
		$site.animate({
			scrollTop: scrollTo
		}, 2000, 'easeInOutBack', function() {
			window.location.hash = page;
			scrolling = false;
			$view.disablescroll("undo");
		});
	});
};

//  SCROLLING
//  Controls various scrolling animations
// --------------------------------------
var Scroll = function() {

	/* -- MANUAL PAGE & NAV CHANGE -- */
	var pageSnap = function(direction) {
		var scrollAction, i, height, end, viewed, diff;
		var offsets = Offsets();
		var position = $view.scrollTop();
		var viewport = $view.height();
		var disable = 0;
		

		//if user can see bottom of section and scrolls, pop and change
		$.each(offsets['y'], function(key,section) {
			
			height = offsets['height'][key]; //height of section
			//special function for specialties
			if(key == 0) { height = height + $('#header').outerHeight(true); }

			//calculate for down
			if(direction == 'down') {
				end = section + height; //bottom of section (with bar)
				viewed = position + viewport; //bottom of screen
				diff = end + 100; // room for top bar

				if(position > section && position < end && viewed > diff) {
					key = key + 1;
					scrollAction = true;
				}
			}

			//calculate for up
			if(direction == 'up') {
				end = 0;
				if(section > viewport) {
					end = section - viewport; //bottom of section (with bar)
				}

				if(position <= section && position > end) {
					if(key > 0) { key = key - 1; }
					scrollAction = true;
				}
			}

			if(scrollAction) {
				
				//set nav
				$('#navlist li a').removeClass('active');
				$('#navlist li a.'+offsets['id'][key]).addClass('active');
							
				//snap
				//TODO: Fix/build out behavior
				/*$view.disablescroll({ handleScrollbar: false });
				scrolling = true;
				
				$site.animate({
					scrollTop: offsets['y'][key]
				}, 1500, 'easeInOutQuint', function() {
					scrolling = false;
					window.location.hash = '#'+offsets['id'][key];
					$view.disablescroll("undo");
				});*/

				//stop the loop
				return false;
			} 
		});

	};

	var timeout = null;
	var lastscroll = 0;
	var direction = null;

	$view.scroll(function(e) {	

		//if scrolling isn't animated
		if(!scrolling) {
			//get direction
			if($view.scrollTop() > lastscroll) { 
				direction = "down";
			} else { 
				direction = "up";
			}
			lastscroll = $view.scrollTop();

			if(direction) {	
				//set timeout for scroll animations
				if (timeout) {
					clearTimeout(timeout);
					timeout = false;
				}
				timeout = setTimeout(
					pageSnap(direction), 200);
				direction = null;
			}
		}
	});
};

// RESPONSIVE 
// Responsive functionality
//-----------------------------
var Responsive = function() {
	$('.section').css('min-height', $view.height());

	$(window).resize(function () {
		$('.section').css('min-height', $view.height());
	});
};

// JQUERY ONLOAD
//-------------------------------------
$(function() {
  Responsive();
  Navigation();
  Scroll();
});