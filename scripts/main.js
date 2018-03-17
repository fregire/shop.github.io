(function(){
	var slides  = document.querySelectorAll('.slider__slide'),
		current = 0,
		nextBtn = document.querySelector('.js-slide__next'),
		prevBtn = document.querySelector('.js-slide__prev'),
		menu    = document.querySelector('.js-menu');

	nextBtn.addEventListener('click', function() {
		moveNextSlide(slides, 'slider__slide--active');
	});	
	prevBtn.addEventListener('click', function() {
		movePrevSlide(slides, 'slider__slide--active');
	});
	menu.addEventListener('click', function() {
		document.querySelector('.nav--mobile').classList.toggle('nav--mobile_active');
	});
	// Clear active class
	function clearActiveClasses(elem, elemClass){
		for(let i = 0; i < elem.length; i++){
			elem[i].classList.remove(elemClass);
		}
		
	};
	// Move to next slide by giving next slide class of active
	function moveNextSlide(elem, elemClass){
		// elem - array of slides
		// elemClass - the active class which we give to show slide
		clearActiveClasses(slides, elemClass);
		if(current >= elem.length - 1){
			current = -1;
		}
		elem[current + 1].classList.add(elemClass);
		current++;
		
	}
	// Move to previous slide by giving prev slide class of active
	function movePrevSlide(elem, elemClass) {
		clearActiveClasses(slides, elemClass);
		if(current <= 0) {
			current = elem.length;
		}
		elem[current - 1].classList.add(elemClass);
		current--;
		
	}
	

}());