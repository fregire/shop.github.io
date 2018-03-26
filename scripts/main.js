(function(){
	var slides  = document.querySelectorAll('.slider__slide'),
		current = 0,
		nextBtn = document.querySelector('.js-slide__next'),
		prevBtn = document.querySelector('.js-slide__prev'),
		dots    = document.querySelectorAll('.slider__dot');

	nextBtn.addEventListener('click', function() {
		moveNextSlide(slides, 'slider__slide--active', dots, 'slider__dot--active');
	});	
	prevBtn.addEventListener('click', function() {
		movePrevSlide(slides, 'slider__slide--active', dots, 'slider__dot--active');
	});
	menu.addEventListener('click', function() {
		document.querySelector('.nav--mobile').classList.toggle('nav--mobile_active');
	});
	for(var i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', moveFromDots);
	};
	// Clear active classes for slides and dots
	function clearActiveClasses(elem, elemClass){
		for(var i = 0; i < elem.length; i++){
			elem[i].classList.remove(elemClass);
		}
		
	};
	// Move to next slide by giving next slide class of active
	function moveNextSlide(elemSlides, elemClassSlides, elemDots, elemClassDots){
		// elemSlides - array of slides
		// elemClassSlides - the active class which we give to show slide
		// elemDots - the array of dots for slider
		// elemClassDots - class which we give to the dots to change their appearence
		clearActiveClasses(elemSlides, elemClassSlides);
		clearActiveClasses(elemDots, elemClassDots);
		if(current >= elemSlides.length - 1){
			current = -1;
		}
		elemSlides[current + 1].classList.add(elemClassSlides);
		elemDots[current + 1].classList.add(elemClassDots);
		current++;
		
	}
	// Move to previous slide by giving prev slide class of active
	function movePrevSlide(elemSlides, elemClassSlides, elemDots, elemClassDots) {
		// elemSlides - array of slides
		// elemClassSlides - the active class which we give to show slide
		// elemDots - the array of dots for slider
		// elemClassDots - class which we give to the dots to change their appearence
		clearActiveClasses(elemSlides, elemClassSlides);
		clearActiveClasses(elemDots, elemClassDots);
		if(current <= 0) {
			current = elemSlides.length;
		}
		elemSlides[current - 1].classList.add(elemClassSlides);
		elemDots[current - 1].classList.add(elemClassDots)
		current--;
	};
	// When you click one of the dots it execute this function to move to this slide
	function moveFromDots(){
		// Get number of the slide
		var slideNum = this.getAttribute('data-slide');
		clearActiveClasses(slides, 'slider__slide--active');
		clearActiveClasses(dots, 'slider__dot--active');
		slides[slideNum].classList.add('slider__slide--active');
		this.classList.add('slider__dot--active');
		current = parseInt(slideNum);
	}
	

}());