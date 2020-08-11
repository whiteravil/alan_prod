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

	document.querySelectorAll('.scrollbar-styles').forEach(content => {
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

	$(".number-mask").inputmask('decimal', {
		rightAlignNumerics: false
	});

	let editGoals = new KTOffcanvas('edit-goals', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
		closeBy: 'roles-close',
		toggleBy: 'roles-toggle'
	});

	let editRoles = new KTOffcanvas('edit-roles', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let viewRoles = new KTOffcanvas('view-roles', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let changePassword = new KTOffcanvas('change-password', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let editProfile = new KTOffcanvas('edit-profile', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let createAdmin = new KTOffcanvas('create-admin', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let addGoal = new KTOffcanvas('add-goal', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let addDomen = new KTOffcanvas('add-domen', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let editDomen = new KTOffcanvas('edit-domen', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let addCategory = new KTOffcanvas('add-category', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	let editCategory = new KTOffcanvas('edit-category', {
		overlay: true,
		baseClass: 'offcanvas',
		placement: 'right',
	});

	$('.open-edit').on('click', function(e) {
		e.preventDefault();
		editGoals.show();
	});

	$('.open-edit-role').on('click', function(e) {
		e.preventDefault();
		editRoles.show();
	});

	$('.open-view-role').on('click', function(e) {
		e.preventDefault();
		viewRoles.show();
	});

	$('.open-change-password').on('click', function(e) {
		e.preventDefault();
		changePassword.show();
	});

	$('.open-edit-profile').on('click', function(e) {
		e.preventDefault();
		editProfile.show();
	});

	$('.open-create-admin').on('click', function(e) {
		e.preventDefault();
		createAdmin.show();
	});

	$('.open-roles').on('click', function(e) {
		e.preventDefault();
		roles.show();
	});

	$('.open-add-goal').on('click', function(e) {
		e.preventDefault();
		addGoal.show();
	});

	$('.open-add-domen').on('click', function(e) {
		e.preventDefault();
		addDomen.show();
	});

	$('.open-edit-domen').on('click', function(e) {
		e.preventDefault();
		editDomen.show();
	});

	$('.open-add-category').on('click', function(e) {
		e.preventDefault();
		addCategory.show();
	});

	$('.open-edit-category').on('click', function(e) {
		e.preventDefault();
		editCategory.show();
	});

	$('.canvas-close').on('click', function(e) {
		e.preventDefault();
		editGoals.classOverlay !== undefined ? editGoals.hide() : null;
		roles.classOverlay !== undefined ? roles.hide() : null;
		editRoles.classOverlay !== undefined ? editRoles.hide() : null;
		viewRoles.classOverlay !== undefined ? viewRoles.hide() : null;
		changePassword.classOverlay !== undefined ? changePassword.hide() : null;
		editProfile.classOverlay !== undefined ? editProfile.hide() : null;
		createAdmin.classOverlay !== undefined ? createAdmin.hide() : null;
		addGoal.classOverlay !== undefined ? addGoal.hide() : null;
		addDomen.classOverlay !== undefined ? addDomen.hide() : null;
		editDomen.classOverlay !== undefined ? editDomen.hide() : null;
		editCategory.classOverlay !== undefined ? editCategory.hide() : null;
		addCategory.classOverlay !== undefined ? addCategory.hide() : null;
	});

	$('.daterange-picker').daterangepicker({
		buttonClasses: 'btn',
		applyClass: 'btn-primary',
		cancelClass: 'btn-secondary',
		locale: {
			format: 'DD.MM.YYYY'
		}
	});

});