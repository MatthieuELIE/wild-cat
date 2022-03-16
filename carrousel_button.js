const catList = [
  { name: "chat 1", race: "européen" },
  { name: "chat 2", race: "bengal" },
  { name: "chat 3", race: "siamois" },
  { name: "chat 4", race: "chartreux" },
  { name: "chat 5", race: "bengal" },
  { name: "chat 6", race: "chartreux" },
  { name: "chat 7", race: "bengal" },
];

const container = document.body.querySelector(".carrousel-container");
const leftBtn = document.querySelector(".btn-g");
const rightBtn = document.querySelector(".btn-d");
let sliderPosition = 0;

//taille du container avec toutes les images
container.style.width = 90 * catList.length + "vw";

//ajout des images dans la div qui se créé dans le carrousel

for (i = 0; i < catList.length; i++) {
  const cat = catList[i];

  const div = document.createElement("div");
  div.className = "photo";
  div.style.backgroundImage = "url('./assets/Photos-chats/img" + i + ".jpg')";

  // On attache les données du chat à l'élément div
  div.dataset.name = cat.name;
  div.dataset.race = cat.race;

  div.addEventListener("click", function (event) {
    // event.target contient un référence vers l'élément du DOM
    // qui a lancé le click
    console.log(event.target.dataset);
    event.target.classList.toggle('visible');
  });

  // Création des informations du chat
  const infos = document.createElement("p");
  infos.innerHTML = cat.name;
  div.appendChild(infos);

  container.appendChild(div);
}

leftBtn.addEventListener("click", function () {
  slide(1);
});

rightBtn.addEventListener("click", function () {
  slide(-1);
});

function slide(direction = 1) {
  if (direction === 1 && sliderPosition === 0) {
    return;
  }

  if (
    direction === -1 &&
    sliderPosition <= (catList.length - 1) * 90 * direction
  ) {
    return;
  }

  sliderPosition += 90 * direction;
  container.style.transform = `translateX(${sliderPosition}vw)`;
}
