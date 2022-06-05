"use strict"
import { listenerAbout } from "./about.js";
const menuBarsBtn = document.getElementById("menu-bars");
const navbar = document.querySelector(".navbar");

const listener = (
  () => {
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



    listenerAbout();
  }
)()