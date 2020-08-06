$(function() {

	let roles = new KTOffcanvas('roles', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
		closeBy: 'roles-close',
		toggleBy: 'roles-toggle'
	});

	document.querySelectorAll('.offcanvas-content').forEach(content => {
		let ps = new PerfectScrollbar(content);
	});

	$('.custom-sort-th').on('click', function() {
		$(this).toggleClass('active')
	});

	$(document).on('click', function(e) {
		if ( !$(e.target).closest('.search-form').length ) {
			$('.search-form').removeClass('opened-dropdown');
		}
	});

	$('.search-form').on('input', function() {
		$('.search-form').addClass('opened-dropdown');
	});

	function addMinimazeToSmallDesktop() {
		if ( $(window).width() < 1600 ) {
			$('body').addClass('aside-minimize')
		}
		else {
			$('body').removeClass('aside-minimize')
		}
	}addMinimazeToSmallDesktop();

	$(window).on('resize', addMinimazeToSmallDesktop);


});