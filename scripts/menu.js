(function(){

	var menu     = document.querySelector('.header__burger'),
		headMenu = document.querySelector('.header__mobile-nav');
	// If js scripts dont work, then it wont work
	headMenu.classList.remove('header__mobile-nav--nojs'); 

	menu.addEventListener('click', function() {
		document.querySelector('.page-nav--mobile').classList.toggle('page-nav--mobile_active');
	});

}());