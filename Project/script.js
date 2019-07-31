//CITATION for basic carousel: https://www.youtube.com/watch?v=KcdBOoK3Pfw

const carousel_slide = document.querySelector(".carousel-slide");
const carousel_images = document.querySelectorAll(".carousel-slide img");
var prev_button = document.querySelector('#prev-button');
var next_button = document.querySelector('#next-button');

var index = 1;
const size = carousel_images[0].clientWidth;

carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';

next_button.addEventListener('click', next_slide);
prev_button.addEventListener('click', prev_slide);

setInterval(next_slide, 3000);

function next_slide(){
    if(index >= carousel_images.length - 1){
        return;
    }
    carousel_slide.style.transition = "transform 0.2s ease-in-out";
    index++;
    carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';
}

function prev_slide(){
    if(index <= 0){
        return;
    }
    carousel_slide.style.transition = "transform 0.2s ease-in-out";
    index--;
    carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';
}


carousel_slide.addEventListener('transitionend', function(){
    if(carousel_images[index].id === "lastClone"){
        carousel_slide.style.transition = "none";
        index = carousel_images.length - 2;
        carousel_slide.style.transition = 'translateX(' + (-size * index) + 'px)';
    }

    if(carousel_images[index].id === "firstClone"){
        carousel_slide.style.transition = "none";
        index = carousel_images.length - index;
        carousel_slide.style.transition = 'translateX(' + (-size * index) + 'px)';
    }
});
