var slides = document.querySelectorAll('#slidesText .slideText');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var sliderImgWrapper = document.getElementById('sliderImgWrapper');
var numberImg = document.getElementById('controlNumber');
var screenWidth = window.innerWidth;
var hash = window.location.hash;

if (screenWidth >= 425) {
    var anchors = document.querySelectorAll("#ancreDecouverte, #ancreEssentielle");
    anchors.forEach((anchor) => {
        anchor.removeAttribute("id");
    })
}

if (hash === "#ancreDecouverte") {
    goToSlide(1);
} else if (hash === "#ancreEssentielle") {
    goToSlide(2);
}



next.onclick = function() {
    nextSlide();
};

previous.onclick = function() {
    previousSlide();
};

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slideText offresText';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slideText showing offresText';

    if (currentSlide === 1) {
        sliderImgWrapper.style.marginLeft = '-35vw';
        numberImg.src = "public/img/2sur3.png";
    } else if (currentSlide === 2) {
        sliderImgWrapper.style.marginLeft = '-70vw';
        numberImg.src = "public/img/3sur3.png";
    } else if (currentSlide === 0) {
        sliderImgWrapper.style.marginLeft = '0';
        numberImg.src = "public/img/1sur3.png";
    }
}