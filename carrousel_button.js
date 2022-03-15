document.body.onload = function() {

    const imgSlider = ["./assets/Photos-chats/Beebop.jpg", "./assets/Photos-chats/Bella.jpg","./assets/Photos-chats/Bossa.jpeg", "./assets/Photos-chats/Chacha.jpg", "./assets/Photos-chats/Charly.jpg","./assets/Photos-chats/Chatons.jpg", "./assets/Photos-chats/Daisy.jpg", "./assets/Photos-chats/Dominika.jpg", "./assets/Photos-chats/Donatello.jpg", "./assets/Photos-chats/Koshka.jpg", "./assets/Photos-chats/Leonardo.jpg", "./assets/Photos-chats/Luigi.jpg", "./assets/Photos-chats/Mario.jpg", "./assets/Photos-chats/Michelangelo.jpg", "./assets/Photos-chats/Nova.jpg", "./assets/Photos-chats/Raphaello.jpg", "./assets/Photos-chats/Sacha.jpg", "./assets/Photos-chats/Samba.jpg", "./assets/Photos-chats/Spoutnik.jpg", "./assets/Photos-chats/Sveta.jpg", "./assets/Photos-chats/Warrio.jpg",];
    container = document.body.querySelector(".carrousel");
    g = document.querySelector(".btn-g");
    d = document.querySelector(".btn-d");
    nbr = imgSlider.length;

    //taille du container avec toutes les images

    container.style.width=(800 * nbr) + "px";

    //ajout des images dans la div qui se créé dans le carrousel

    for (let i = 0; i < nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('./assets/Photos-chats/img"+i+".jpg')";
        container.appendChild(div);
    }
}