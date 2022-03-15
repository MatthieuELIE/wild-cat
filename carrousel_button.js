const imgSlider = [
  "./assets/Photos-chats/Beebop.jpg",
  "./assets/Photos-chats/Bella.jpg",
  "./assets/Photos-chats/Bossa.jpeg",
  "./assets/Photos-chats/Chacha.jpg",
  "./assets/Photos-chats/Charly.jpg",
  "./assets/Photos-chats/Chatons.jpg",
  "./assets/Photos-chats/Daisy.jpg",
  "./assets/Photos-chats/Dominika.jpg",
  "./assets/Photos-chats/Donatello.jpg",
  "./assets/Photos-chats/Koshka.jpg",
  "./assets/Photos-chats/Leonardo.jpg",
  "./assets/Photos-chats/Luigi.jpg",
  "./assets/Photos-chats/Mario.jpg",
  "./assets/Photos-chats/Michelangelo.jpg",
  "./assets/Photos-chats/Nova.jpg",
  "./assets/Photos-chats/Raphaello.jpg",
  "./assets/Photos-chats/Sacha.jpg",
  "./assets/Photos-chats/Samba.jpg",
  "./assets/Photos-chats/Spoutnik.jpg",
  "./assets/Photos-chats/Sveta.jpg",
  "./assets/Photos-chats/Warrio.jpg",
];
const container = document.body.querySelector(".carrousel-container");
const leftBtn = document.querySelector(".btn-g");
const rightBtn = document.querySelector(".btn-d");
let sliderPosition = 0;
let nbr = imgSlider.length;

document.body.onload = function () {
  //taille du container avec toutes les images

  container.style.width = 800 * nbr + "px";

  //ajout des images dans la div qui se créé dans le carrousel

  for (i = 0; i < nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url('./assets/Photos-chats/img" + i + ".jpg')";
    container.appendChild(div);
  }
};

leftBtn.addEventListener("click", function () {
  slide(1);
});

rightBtn.addEventListener("click", function () {
  slide(-1);
});

function slide(direction = 1) {
  if (direction === 1 && sliderPosition === 0) {
      return;
  } else if (direction === -1 && sliderPosition === -16000) {
      return;
  }

  sliderPosition += 800 * direction;
  container.style.transform = `translateX(${sliderPosition}px)`;
}
