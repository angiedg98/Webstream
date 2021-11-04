$(function(){
    console.log("JS Ready to mingle")

    var toggleButton = document.getElementsByClassName('toggle-button')[0]
    var navbarLinks = document.getElementsByClassName('navButtons')[0]

    $(toggleButton).click(function(){
        console.log("clicked");
        navbarLinks.classList.toggle('active')
    });

    document.getElementsByClassName("headerSlider")
        console.log("Header container spotted");


const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

});

