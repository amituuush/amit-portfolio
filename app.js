(function start() {
  var menuIcon = document.querySelector(".nav-button");
  var navMenu = document.querySelector(".nav-menu");
  var navMenuClassList = navMenu.classList;

  menuIcon.addEventListener("click", function () {
    toggleNavMenuHidden();
  });

  navMenu.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
      toggleNavMenuHidden();
    }
  });


  function toggleNavMenuHidden() {
    navMenuClassList.toggle("hidden");
  }

  document.querySelector(".footer-year").textContent = new Date().getFullYear();
}())