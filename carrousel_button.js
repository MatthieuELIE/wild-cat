    //Données des chats répertoriés sous forme d'objets
const catList = [
  { name: "Beebop", race: "autre race", sex: "mâle", age: "10 ans", localisation: "Bordeaux" },
  { name: "Bella", race: "Balinais", sex: "femelle", age: "5 ans", localisation: "Bordeaux"  },
  { name: "Bossa", race: "Balinais", sex: "femelle", age: "1 ans", localisation: "Pessac"  },
  { name: "Chacha", race: "Bengale", sex: "femelle", age: "3 ans", localisation: "Pessac"  },
  { name: "Charly", race: "Sibérien", sex: "mâle", age: "2 ans", localisation: "Merignac"  },
  { name: "Chatons", race: "Bengale", sex: "mâle", age: "0 an", localisation: "Merignac"  },
  { name: "Daisy", race: "Chartreux", sex: "femelle", age: "9 ans", localisation: "Talence"  },
  { name: "Dominika", race: "Chartreux", sex: "femelle", age: "12 ans", localisation: "Talence"  },
  { name: "Donatello", race: "Chartreux", sex: "mâle", age: "8 ans", localisation: "Cenon"  },
  { name: "Leonardo", race: "Européen", sex: "mâle", age: "3 ans", localisation: "Lormont"  },
  { name: "Luigi", race: "Européen", sex: "mâle", age: "12 ans", localisation: "Begles"  },
  { name: "Mario", race: "Européen", sex: "mâle", age: "11 ans", localisation: "Begles"  },
  { name: "Michelangelo", race: "Autre", sex: "mâle", age: "5 ans", localisation: "Floirac"  },
  { name: "Nova", race: "Himalayen", sex: "femelle", age: "3 ans", localisation: "Le Bouscat"  },
  { name: "Raphaello", race: "Siamois", sex: "mâle", age: "1 ans", localisation: "Saint Medard"  },
  { name: "Sacha", race: "Himalayen", sex: "femelle", age: "2 ans", localisation: "Villenave d'Ornon"  },
  { name: "Samba", race: "Maine coon", sex: "femelle", age: "6 ans", localisation: "Bruges"  },
  { name: "Spoutnik", race: "Sacré de Birmanie", sex: "mâle", age: "7 ans", localisation: "Villenave d'Ornon"  },
  { name: "Sveta", race: "Maine coon", sex: "femelle", age: "5 ans", localisation: "Gradignan"  },
  { name: "Warrio", race: "Persan", sex: "mâle", age: "2 ans", localisation: "Bordeaux"  },
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
  div.dataset.sex = cat.sex;
  div.dataset.age = cat.age;
  div.dataset.localisation = cat.localisation;

  div.addEventListener("click", function (event) {
    // event.target contient un référence vers l'élément du DOM
    // qui a lancé le click
    console.log(event.target.dataset);
    event.target.classList.toggle("visible");
  });

  // Création des informations du chat
  let infos = document.createElement("p");
  infos.className = "infos-chats";
  infos.innerHTML = `
    ${cat.name}, ${cat.race}, ${cat.sex}, ${cat.age}, ${cat.localisation}
    <img src="assets/cross.gif" class="cross">
  `;
  div.appendChild(infos);

  container.appendChild(div);

  //Sélection de la croix pour fermer le bloc infos chats
  closingCross = div.querySelector(".cross");

  //Evenement au click pour fermer le bloc
  closingCross.addEventListener("click", function () {
    // Au clic sur la croix, la fenêtre infos se ferme.
    div.classList.remove("visible");
  });
}

    // Défilement des images du carrousel avec les touches gauche et droite
document.body.addEventListener("keyup", function (event) {
  if (event.key === "ArrowLeft") {
    slide(1);
  }

  if (event.key === "ArrowRight") {
    slide(-1);
  }
});

    // Boutons de défilement des images du carrousel
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
    direction === -1 && sliderPosition <= (catList.length - 1) * 90 * direction
  ) {
    return;
  }

  sliderPosition += 90 * direction;
  container.style.transform = `translateX(${sliderPosition}vw)`;
}

// Récupération du formulaire 
let formData = document.querySelector(".search");

// Données mises dans un objet
/*let formSearch = {
  "region" : formRegion,
  "race" : formRace,
  "sex" : formSex,
  "age" : formAge,
}*/

// Lors du click sur le bouton "recherche" on récupère les infos choisies
catSearch = document.querySelector('[name="search_cats"]').addEventListener('click', function() {
  let formRegion = document.querySelector('[name="region"]').value;
  let formRace = document.querySelector('[name="cats-race"]').value;
  let formSex = document.querySelector('[name="cats-sex"]').value;
  let formAge = document.querySelector('[name="cats-age"]').value;

  alert(formRegion + formRace + formSex + formAge);
})



// filtrage des chats 



/**
 * Formulaire de recherche : au click sur le bouton "rechercher" (addEventListener)
 * 
 * 1 - récupérer les valeurs du formulaire (région, race ...)
 * document.querySelector('[name="region"]').value
 * 
 * 
 * 2 - filtrer la liste des chats en fonction des données du formulaire
 * catList.filter(function(cat) {
     return cat.race === "Bengale" && cat.sexe === "femelle" ...
   })
 *
 * 
 * 3 - reconstruire les images des chats dans le caroussel
 *
 */