// feature slider

var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n)
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 };
    if (n < 1) { slide_index = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

// testimonial slider


var slider_index = 1;
showSlides(slider_index);

function forwardSlide(n) {
    showSlides(slider_index += n);
}

function previousSlide(n) {
    showSlides(slider_index = n)
}

function showSlides(n) {
    var i;
    var slider = document.getElementsByClassName("slider");
    if (n > slider.length) { slider_index = 1 };
    if (n < 1) { slider_index = slider.length };
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slider_index - 1].style.display = "block";
}