let i = 0;
let img = [];
let slideTime = 5000; 

img[0] = 'img/adv1.jpg';
img[1] = 'img/adv2.jpg';
img[2] = 'img/adv3.jfif';

const changePicture = () => {
    document.getElementById('container-banner').style.backgroundImage = "url(" + img[i] + ")";

    if (i < img.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
};

$(document).ready(changePicture());