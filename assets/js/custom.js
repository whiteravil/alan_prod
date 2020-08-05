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


})