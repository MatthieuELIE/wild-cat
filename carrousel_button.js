const catList = [
  {
    name: "Beebop",
    race: "autre race",
    sexe: "mâle",
    age: "10 ans",
    localisation: "Bretagne",
  },
  { name: "Bella", race: "Balinais", sexe: "femelle", age: "5 ans" },
  { name: "Bossa", race: "Balinais", sexe: "femelle", age: "1 ans" },
  { name: "Chacha", race: "Bengale", sexe: "femelle", age: "3 ans" },
  { name: "Charly", race: "Sibérien", sexe: "mâle", age: "2 ans" },
  { name: "Chatons", race: "Bengale", sexe: "mâle", age: "0 an" },
  { name: "Daisy", race: "Chartreux", sexe: "femelle", age: "9 ans" },
  { name: "Dominika", race: "Chartreux", sexe: "femelle", age: "12 ans" },
  { name: "Donatello", race: "Chartreux", sexe: "mâle", age: "8 ans" },
  { name: "Leonardo", race: "Européen", sexe: "mâle", age: "3 ans" },
  { name: "Luigi", race: "Européen", sexe: "mâle", age: "12 ans" },
  { name: "Mario", race: "Européen", sexe: "mâle", age: "11 ans" },
  { name: "Michelangelo", race: "Autre", sexe: "mâle", age: "5 ans" },
  { name: "Nova", race: "Himalayen", sexe: "femelle", age: "3 ans" },
  { name: "Raphaello", race: "Siamois", sexe: "mâle", age: "1 ans" },
  { name: "Sacha", race: "Himalayen", sexe: "femelle", age: "2 ans" },
  { name: "Samba", race: "Maine coon", sexe: "femelle", age: "6 ans" },
  { name: "Spoutnik", race: "Sacré de Birmanie", sexe: "mâle", age: "7 ans" },
  { name: "Sveta", race: "Maine coon", sexe: "femelle", age: "5 ans" },
  { name: "Warrio", race: "Persan", sexe: "mâle", age: "2 ans" },
  { name: "Koshka", race: "Persan", sexe: "femelle", age: "10 ans" },
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
  div.dataset.sexe = cat.sexe;
  div.dataset.age = cat.age;
  div.dataset.localisation = cat.localisation;

  div.addEventListener("click", function (event) {
    // event.target contient un référence vers l'élément du DOM
    // qui a lancé le click
    console.log(event.target.dataset);
    event.target.classList.toggle("visible");
  });
/*
  let closingCross = document.createElement("img");
  closingCross.src = "url('../../assets/cross.gif')";
  closingCross.appendChild(infos);*/

  // Création des informations du chat
  const infos = document.createElement("p");
  infos.className = "infos-chats";
  infos.innerHTML = cat.name + ", " + cat.race +  ", " + cat.sexe +  ", " + cat.age +  ", " + cat.localisation + '<img src="assets/cross.gif" class="cross">';
  div.appendChild(infos);

  container.appendChild(div);

  closingCross = document.querySelector(".cross");
  console.log(closingCross);

  closingCross.addEventListener("click", function () {
    // Au clic sur la croix, la fenêtre infos se ferme.
    div.classList.remove("visible");
  });
}

document.body.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft") {
    slide(1);
  }

  if (event.key === "ArrowRight") {
    slide(-1);
  }
});

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
