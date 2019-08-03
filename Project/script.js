//fade in page headers
window.addEventListener("load", function(){
    var header = document.getElementById("header");
    header.style.opacity = 1;

    var icons = document.getElementById("icons");
    icons.style.opacity = 1;
    
    var desc = false;
    sortButton = document.getElementById("sortButton");
    
    sortButton.addEventListener("click", function(){
        sort_elems("unorderedList", desc);
        desc = !desc;
        return false;
    });

});

//compare 2 strings
function compare(x, y){
    var string1 = x.innerText;
    var string2 = y.innerText;

    if(string1 > string2){
        return 1;
    } else if (string2 > string1){
        return -1;
    } else{
        return 0;
    }
}

//sort list elements
function sort_elems(ul, sortDesc){
    ul = document.getElementById(ul);
    var list = ul.getElementsByTagName("LI");
    var list_elems = [];

    for(var i = 0, len = list.length; i < len; i++){
        list_elems.push(list[i]);
    }

    list_elems.sort(compare);

    if(sortDesc){
        list_elems.reverse();
    }

    ul.innerHTML = '';

    for(var i = 0, len = list_elems.length; i < len; i++){
        ul.appendChild(list_elems[i]);
    }

}

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
    if(carousel_images[index].id === "firstClone"){
        //console.log('firstClone');
        carousel_slide.style.transition = 'none';
        index = carousel_images.length - index;
        carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';
    } else {
        carousel_slide.style.transition = 'transform 0.2s ease-in-out';
        index++;
        carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';
    }
}

function prev_slide(){
    if(carousel_images[index].id === "lastClone"){
        //console.log('lastClone');
        carousel_slide.style.transition = 'none';
        index = carousel_images.length - 2;
        carousel_slide.style.transform = 'transform 0s';
    } else {
        carousel_slide.style.transition = 'transform 0.2s ease-in-out';
        index--;
        carousel_slide.style.transform = 'translateX(' + (-size * index) + 'px)';
    }
}

