let i = 0;
let images = [];
let time = 3000;

images[0] = 'pictures/black&white.JPG';
images[1] = 'pictures/sunset2.JPG';
images[2] = 'pictures/fairytale.JPG';

function changeImg () {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }   else {
        i = 0;
    }

    setTimeout('changeImg()', time);
    
}

window.onload = changeImg;