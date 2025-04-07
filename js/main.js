document.getElementById("menu-toggle").addEventListener("click", function(event) {
    var menu = document.querySelector(".menu");
    var fadeLayer = document.querySelector(".fade-layer");
    var icon = this.querySelector("i.material-icons");

    menu.classList.toggle("show");
    fadeLayer.classList.toggle("visible");

    if (menu.classList.contains("show")) {
        icon.textContent = "close";
    } else {
        icon.textContent = "menu";
    }

    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    var menu = document.querySelector(".menu");
    var fadeLayer = document.querySelector(".fade-layer");

    if (!menu.contains(event.target) && !fadeLayer.contains(event.target)) {
        // Stäng menyn och fade-lagret om klicket var utanför dock inte utanför det gråa lagret 
        menu.classList.remove("show");
        fadeLayer.classList.remove("visible");

        var icon = document.getElementById("menu-toggle").querySelector("i.material-icons");
        icon.textContent = "menu";
    }
});


// Följande är skelletkod från W3 SCHOOLS
function myFunction(divId) { 
    var x = document.getElementById(divId);
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  