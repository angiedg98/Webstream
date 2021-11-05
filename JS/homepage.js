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




const recUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2c3622354ef28af5d4c657f69a9f48b6&language=en-US&page=1"
    $.getJSON(recUrl, function(result) {
        
        for(var i = 0; i < 4; i++){
            var filmCard = `<div class="col-5 col-md-4 col-lg-3 filmCard">
                                <div class="filmImg"><img src="https://image.tmdb.org/t/p/original`+result.results[i].poster_path+` " height="100%" width="100%"></div>
                                <div class="filmTitle">
                                    <p>`+result.results[i].title+`</p>
                                </div>
                            </div>`
                            $(".recFilmContainer").append(filmCard);
        };
        console.log(result.results);
    });



    const libUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2c3622354ef28af5d4c657f69a9f48b6&language=en-US&page=1"
    $.getJSON(libUrl, function(result) {
        
        for(var i = 0; i < 150; i++){
            var filmCard = `<div class="col-5 col-md-4 col-lg-3 filmCard">
                                <div class="filmImg"><img src="https://image.tmdb.org/t/p/original`+result.results[i].poster_path+` " height="100%" width="100%"></div>
                                <div class="filmTitle">
                                    <p>`+result.results[i].title+`</p>
                                </div>
                            </div>`
                            $(".libFilmContainer").append(filmCard);
        };
    });
});



