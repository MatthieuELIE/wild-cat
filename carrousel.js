const slider = document.querySelector(".slider-img");
const imgSlider = ["./assets/Photos-chats/Beebop.jpg", "./assets/Photos-chats/Bella.jpg","./assets/Photos-chats/Bossa.jpeg", "./assets/Photos-chats/Chacha.jpg", "./assets/Photos-chats/Charly.jpeg","./assets/Photos-chats/Chatons.jpeg", "./assets/Photos-chats/Daisy.jpeg", "./assets/Photos-chats/Dominika.jpeg", "./assets/Photos-chats/Donatello.jpeg", "./assets/Photos-chats/Koska.jpeg", "./assets/Photos-chats/Leonardo.jpeg", "./assets/Photos-chats/Luigi.jpeg", "./assets/Photos-chats/Mario.jpeg", "./assets/Photos-chats/Michelangelo.jpeg", "./assets/Photos-chats/Nova.jpeg", "./assets/Photos-chats/Raphaello.jpeg", "./assets/Photos-chats/Sacha.jpeg", "./assets/Photos-chats/Samba.jpeg", "./assets/Photos-chats/Spoutnik.jpeg", "./assets/Photos-chats/Sveta.jpeg", "./assets/Photos-chats/Warrio.jpeg",];
const time = 5000;
let i = 0;

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