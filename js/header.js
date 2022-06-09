"use strict"

const allItemMenu = document.querySelectorAll(".header .navbar a");
const menuBarsBtn = document.getElementById("menu-bars");
const navbar = document.querySelector(".navbar");

//activa el item del menu seleccionado
const checkActiveNav = (itemToActive) => {
  allItemMenu.forEach(item => item.classList.remove("active"));
  itemToActive.classList.add("active");
}

const listenerHeader = () => {

  allItemMenu.forEach(itemMenu => {
    itemMenu.addEventListener("click", (e)=> checkActiveNav(e.target))
  })

  //despliega menu en responsivo
  menuBarsBtn.addEventListener("click", e => {
    if(e.target.classList.contains("fa-bars")){
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-times");
      navbar.classList.add("active");
    }else{
      e.target.classList.remove("fa-times");
      e.target.classList.add("fa-bars");
      navbar.classList.remove("active");
    }
  })  
}

export { listenerHeader, checkActiveNav }