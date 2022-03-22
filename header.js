

    // header2

    function toggleMenu () {  
      const navbar = document.querySelector('.navbar');
      const burger = document.querySelector('.burger');
      burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
      });    
    }
    toggleMenu();
  


    1
    2
    3


    document.querySelectorAll(".navbar__links").forEach(function(element){
      element.addEventListener("click", function () {
      document.querySelector(".navbar").click();
        });
    });
 