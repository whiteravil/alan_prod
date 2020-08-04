$(function() {

	let roles = new KTOffcanvas('roles', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
		closeBy: 'roles-close',
		toggleBy: 'roles-toggle'
	});

	let ps = new PerfectScrollbar('#roles-content');


})