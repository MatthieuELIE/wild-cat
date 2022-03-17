const catList = [
  { name: "Beebop", race: "autre race", sexe: "mâle", age: "10 ans", localisation: "Auvergne-Rhone-Alpes" },
  { name: "Bella", race: "Balinais", sex: "femelle", age: "5 ans", localisation: "Auvergne-Rhone-Alpes"  },
  { name: "Bossa", race: "Balinais", sex: "femelle", age: "1 ans", localisation: "Bourgogne-Franche-Comte"  },
  { name: "Chacha", race: "Bengale", sex: "femelle", age: "3 ans", localisation: "Bretagne"  },
  { name: "Charly", race: "Sibérien", sex: "mâle", age: "2 ans", localisation: "Bretagne"  },
  { name: "Chatons", race: "Bengale", sex: "mâle", age: "0 an", localisation: "Centre-Val de Loire"  },
  { name: "Daisy", race: "Chartreux", sex: "femelle", age: "9 ans", localisation: "Corse"  },
  { name: "Dominika", race: "Chartreux", sex: "femelle", age: "12 ans", localisation: "Corse"  },
  { name: "Donatello", race: "Chartreux", sex: "mâle", age: "8 ans", localisation: "Grand Est"  },
  { name: "Leonardo", race: "Européen", sex: "mâle", age: "3 ans", localisation: "Hauts-de-France"  },
  { name: "Luigi", race: "Européen", sex: "mâle", age: "12 ans", localisation: "Ile-de-France"  },
  { name: "Mario", race: "Européen", sex: "mâle", age: "11 ans", localisation: "Ile-de-France"  },
  { name: "Michelangelo", race: "Autre", sex: "mâle", age: "5 ans", localisation: "Ile-de-France"  },
  { name: "Nova", race: "Himalayen", sex: "femelle", age: "3 ans", localisation: "Normandie"  },
  { name: "Raphaello", race: "Siamois", sex: "mâle", age: "1 ans", localisation: "Nouvelle-Aquitaine"  },
  { name: "Sacha", race: "Himalayen", sex: "femelle", age: "2 ans", localisation: "Nouvelle-Aquitaine"  },
  { name: "Samba", race: "Maine coon", sex: "femelle", age: "6 ans", localisation: "Occitanie"  },
  { name: "Spoutnik", race: "Sacré de Birmanie", sex: "mâle", age: "7 ans", localisation: "Pays de la Loire"  },
  { name: "Sveta", race: "Maine coon", sex: "femelle", age: "5 ans", localisation: "Provence-Alpes-Cete d'Azur"  },
  { name: "Warrio", race: "Persan", sex: "mâle", age: "2 ans", localisation: "Provence-Alpes-Cete d'Azur"  },
  { name: "Koshka", race: "Persan", sex: "femelle", age: "10 ans", localisation: "Autre"  },
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
  div.dataset.sexe = cat.sex;
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
  infos.innerHTML = cat.name + ", " + cat.race +  ", " + cat.sex +  ", " + cat.age +  ", " + cat.localisation + '<img src="assets/cross.gif" class="cross">';
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

/**
 * Formulaire de recherche : au click sur le bouton "rechercher" (addEventListener)
 * 
 * 1 - récupérer les valeurs du formulaire (région, race ...)
 * 
 * document.querySelector('[name="region"]').value
 * 2 - filtrer la liste des chats en fonction des données du formulaire
 * 
 * catList.filter(function(cat) {
     return cat.race === "Bengale" && cat.sexe === "femelle" ...
   })
 * 
 * 
 * 3 - reconstruire les images des chats dans le caroussel
 *
 */