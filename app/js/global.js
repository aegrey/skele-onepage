
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
// -------------------------
var Offsets = {
	
	//METHOD: singlePage
	//requires: page (ID)
	singlePage: function(page) {
		data = $('#'+page).offset().top;
		return data;
	},

	//METHOD: allPages
	//returns all positions
	allPages: function() {
		var id;
		positions = [];
		pages = [];
		heights = [];

		$('.section').each(function(i){
			id = $(this).attr('id');
			positions.push(Offsets.singlePage(id));
			pages.push(id);
			heights.push($(this).outerHeight());
		});

		data = { height: heights, y: positions, id: pages };
		return data;
	}
};

// NAVIGATION & SCROLLING
// Controls main nav & content links
// ----------------------------------
var Navigation = {
	
	//METHOD: init
	//Manually animates page scroll
	init: function() {
		//set first nav active onload
		$('#navlist li a').click(function(e){    
			e.preventDefault();

			//change active nav item
			$('#navlist li').removeClass('active');
			$(this).parent('li').addClass('active');

			//scroll to relevant area
			scrolling = true;
			var page = $(this).data('id');
			var scrollTo = Offsets.singlePage(page);

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
	}
};

//  SCROLLING
//  Controls various scrolling animations
// --------------------------------------------------
var Scroll = {

	//METHOD: pageSnap
	//calls bootstrap scrollspy on nav
	//snaps to next section
	pageSnap: function() {
		
		$('body').scrollspy({ target: '#nav', offset: 300 });

		$('#nav').on('activate.bs.scrollspy', function (e) {
			
			//get next active ID
			var page = $('#navlist li.active a').data('id');
			var scrollTo = Offsets.singlePage(page);

			//snap to next page
			$view.disablescroll({ handleScrollbar: false });
			scrolling = true;
				
			$site.animate({
				scrollTop: scrollTo
			}, 1000, 'easeInOutCirc', function() {
				scrolling = false;
				$view.disablescroll("undo");
				window.location.hash = '#'+page;
			});
			
		});
	},
	
	//METHOD: init
	//initiates page scrolling binds
	init: function() {
		this.pageSnap();
	}
};

// RESPONSIVE 
// Responsive functionality
//-----------------------------
var Responsive = {
	//METHOD: init
	//initiates window resize bind
	init: function() {
		$('.section').css('min-height', $view.height());

		$(window).resize(function () {
			$('.section').css('min-height', $view.height());
		});
	}
};

// JQUERY ONLOAD
//-------------------------------------
$(function() {
  Responsive.init();
  Navigation.init();
  Scroll.init();
});