document.querySelectorAll(".menu__item ").forEach(function(element){
    element.addEventListener("click", function () {
        document.querySelector("#menu__toggle").checked=false;
      });
    });

    