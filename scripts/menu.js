(function(){

	var menu     = document.querySelector('.js-menu'),
		headMenu = document.querySelector('.header__mobile-nav');
	headMenu.classList.remove('header__mobile-nav--nojs');
	menu.addEventListener('click', function() {
		document.querySelector('.nav--mobile').classList.toggle('nav--mobile_active');
	});

}());