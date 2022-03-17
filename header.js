document.querySelectorAll("enu__box a li ").forEach(function(element){
    element.addEventListener("click", function () {
        document.querySelector("#toggle").checked = false;
      });
    });

    
