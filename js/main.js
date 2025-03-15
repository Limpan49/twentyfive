/*document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.querySelector(".menu");
    var fadeLayer = document.querySelector(".fade-layer");
    var icon = this.querySelector("i.material-icons");
  
    // Toggle the menu visibility
    menu.classList.toggle("show");
    fadeLayer.classList.toggle("visible");
  
    // Change the icon when the menu is open or closed
    if (menu.classList.contains("show")) {
      icon.textContent = "close"; // Change icon to "close"
    } else {
      icon.textContent = "menu"; // Change icon to "menu"
    }
  });
*/


document.getElementById("menu-toggle").addEventListener("click", function(event) {
    var menu = document.querySelector(".menu");
    var fadeLayer = document.querySelector(".fade-layer");
    var icon = this.querySelector("i.material-icons");

    menu.classList.toggle("show");
    fadeLayer.classList.toggle("visible");

    if (menu.classList.contains("show")) {
        icon.textContent = "close"; // Ändra till "close" när menyn är öppen
    } else {
        icon.textContent = "menu"; // Ändra till "hamburgemenu" när den är stängd
    }

    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    var menu = document.querySelector(".menu");
    var fadeLayer = document.querySelector(".fade-layer");

    if (!menu.contains(event.target) && !fadeLayer.contains(event.target)) {
        // Stäng menyn och fade-lagret om klicket var utanför
        menu.classList.remove("show");
        fadeLayer.classList.remove("visible");

        var icon = document.getElementById("menu-toggle").querySelector("i.material-icons");
        icon.textContent = "menu";
    }
});
