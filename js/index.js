const menuBtn = document.querySelector(".icon__hamburguer");
const navLinkContainer = document.querySelector(".nav__container");
const submenu = document.querySelectorAll(".submenu");
const header = document.querySelector(".header");
const navShow = document.querySelector(".nav__show");

menuBtn.addEventListener("click", () => {
  navShow.classList.toggle("menu__visible");
});

navLinkContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.matches(".nav__links")) {
    //Si lo que disparo el evento fue un enlace
    if (e.target.querySelector(".submenu__visible")) {
      //Si el enlace que disparo el evento ya tiene desplegado el menu, se lo quitamos
      submenu.forEach((submenues) => {
        submenues.classList.remove("submenu__visible");
      });
      return;
    }
    submenu.forEach((submenues) => {
      submenues.classList.remove("submenu__visible");
    });
    e.target.querySelector(".submenu").classList.toggle("submenu__visible");
  }
  //Cuando se haga click en el enlace para abrir el menu, se le asignara el evento click al document para poder cerrar el menu
  document.addEventListener("click", () => {
    submenu.forEach((submenues) => {
      submenues.classList.remove("submenu__visible");
    });
  });
});
