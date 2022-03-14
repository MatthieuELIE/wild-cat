const slider = document.querySelector(".slider-img");
const imgSlider = ["./assets/Photos-chats/Bossa.jpeg ", "./assets/Photos-chats/Nova.jpg","./assets/Photos-chats/Samba.jpg", "./assets/Photos-chats/Bella.jpg"];
const time = 200;
const i = 0;

function changeImage() {

    document.slide.src = imgSlider[i];

    if (i < imgSlider.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
};

window.onload = changeImage;