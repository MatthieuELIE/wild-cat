//Données des chats répertoriés sous forme d'objets
const catList = [
  {
    name: "Beebop",
    breed: "Autre",
    sex: "mâle",
    age: 10,
    localisation: "Bordeaux",
  },
  {
    name: "Bella",
    breed: "Balinais",
    sex: "femelle",
    age: "5",
    localisation: "Bordeaux",
  },
  {
    name: "Bossa",
    breed: "Balinais",
    sex: "femelle",
    age: "1",
    localisation: "Pessac",
  },
  {
    name: "Chacha",
    breed: "Bengale",
    sex: "femelle",
    age: "3",
    localisation: "Pessac",
  },
  {
    name: "Charly",
    breed: "Sibérien",
    sex: "mâle",
    age: "2",
    localisation: "Merignac",
  },
  {
    name: "Chatons",
    breed: "Bengale",
    sex: "mâle",
    age: "0.5",
    localisation: "Merignac",
  },
  {
    name: "Daisy",
    breed: "Chartreux",
    sex: "femelle",
    age: "9",
    localisation: "Talence",
  },
  {
    name: "Dominika",
    breed: "Chartreux",
    sex: "femelle",
    age: "12",
    localisation: "Talence",
  },
  {
    name: "Donatello",
    breed: "Chartreux",
    sex: "mâle",
    age: "8",
    localisation: "Cenon",
  },
  {
    name: "Leonardo",
    breed: "Européen",
    sex: "mâle",
    age: "3",
    localisation: "Lormont",
  },
  {
    name: "Luigi",
    breed: "Européen",
    sex: "mâle",
    age: "12",
    localisation: "Begles",
  },
  {
    name: "Mario",
    breed: "Européen",
    sex: "mâle",
    age: "11",
    localisation: "Begles",
  },
  {
    name: "Michelangelo",
    breed: "Autre",
    sex: "mâle",
    age: "5",
    localisation: "Floirac",
  },
  {
    name: "Nova",
    breed: "Himalayen",
    sex: "femelle",
    age: "3",
    localisation: "Le Bouscat",
  },
  {
    name: "Raphaello",
    breed: "Siamois",
    sex: "mâle",
    age: "1",
    localisation: "Saint Medard",
  },
  {
    name: "Sacha",
    breed: "Himalayen",
    sex: "femelle",
    age: "2",
    localisation: "Villenave d'Ornon",
  },
  {
    name: "Samba",
    breed: "Maine coon",
    sex: "femelle",
    age: "6",
    localisation: "Bruges",
  },
  {
    name: "Spoutnik",
    breed: "Sacré de Birmanie",
    sex: "mâle",
    age: "7",
    localisation: "Villenave d'Ornon",
  },
  {
    name: "Sveta",
    breed: "Maine coon",
    sex: "femelle",
    age: "5",
    localisation: "Gradignan",
  },
  {
    name: "Warrio",
    breed: "Persan",
    sex: "mâle",
    age: "2",
    localisation: "Bordeaux",
  },
  {
    name: "Koshka",
    breed: "Persan",
    sex: "femelle",
    age: "10",
    localisation: "Autre",
  },
];

let filteredCatList = [...catList];
const container = document.body.querySelector(".carrousel-container");
const leftBtn = document.querySelector(".btn-g");
const rightBtn = document.querySelector(".btn-d");
let sliderPosition = 0;

//taille du container avec toutes les images
container.style.width = 90 * catList.length + "vw";

/**
 * Mets à jour la liste des chat avec les donnée fournies
 */
function updateCatList() {
  container.innerHTML = "";
  sliderPosition = 0;
  container.style.transform = `translateX(0)`;

  for (const cat of filteredCatList) {
    const div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage =
      "url('./assets/Photos-chats/" + cat.name + ".jpg')";

    // On attache les données du chat à l'élément div
    div.dataset.name = cat.name;
    div.dataset.breed = cat.breed;
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
      ${cat.name}, ${cat.breed}, ${cat.sex}, ${cat.age}, ${cat.localisation}
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
}

//ajout des images dans la div qui se créé dans le carrousel
updateCatList(catList);

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
    direction === -1 &&
    sliderPosition <= (filteredCatList.length - 1) * 90 * direction
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
  "breed" : formBreed,
  "sex" : formSex,
  "age" : formAge,
}*/

// Lors du click sur le bouton "recherche" on récupère les infos choisies
catSearch = document
  .querySelector('[name="search_cats"]')
  .addEventListener("click", function () {
    let formRegion = document.querySelector('[name="region"]').value;
    let formBreed = document.querySelector('[name="cats-breed"]').value;
    let formSex = document.querySelector('[name="cats-sex"]').value;

    let formAge = document.querySelector('[name="cats-age"]').value;
    let [minAge, maxAge] = formAge.split("-").map((age) => parseInt(age)); // [10, 12]

    console.log({ formRegion, formBreed, formSex, minAge, maxAge });

    // filtrage des chats
    filteredCatList = catList.filter(
      (cat) =>
        cat.localisation === formRegion &&
        cat.breed === formBreed &&
        cat.sex === formSex &&
        cat.age >= minAge &&
        cat.age <= maxAge
    );

    console.table(filteredCatList);

    updateCatList();
  });

// Reset la liste de chat
// filteredCatList = [...catList]
// updateCatList()

//reconstruction du carrousel avec les chats filtrés
// for (i = 0; i < catListFiltered.length; i++) {
//   const cat = catList[i];

//   const div = document.createElement("div");
//   div.className = "photo";
//   div.style.backgroundImage = "url('./assets/Photos-chats/img" + i + ".jpg')";

/**
 * Formulaire de recherche : au click sur le bouton "rechercher" (addEventListener)
 * 
 * 1 - récupérer les valeurs du formulaire (région, race ...)
 * document.querySelector('[name="region"]').value
 * 
 * 
 * 2 - filtrer la liste des chats en fonction des données du formulaire
 * catList.filter(function(cat) {
     return cat.breed === "Bengale" && cat.sexe === "femelle" ...
   })
 *
 * 
 * 3 - reconstruire les images des chats dans le caroussel
 *
 */
