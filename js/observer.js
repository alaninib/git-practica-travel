"use strict";

import { paint } from "./paintThing.js";
import { checkActiveNav } from "./header.js";

const allSections = document.querySelectorAll("section");
const itemsNav = document.querySelectorAll(".header .navbar a");
let data = {};

//configura la variable que tendra la data;
const dataToSite = (dataSite) => {
  data = dataSite;
}

//activa el item de menu en donde esta posicionado el observer;
const setItemMenuActive = (sectionId) => {
  itemsNav.forEach(item => {
    if(item.dataset.id === sectionId) checkActiveNav(item);
  })
}

//configuracion de observer
const interObserver = () => {
  const callback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if(entry.target.classList.contains("home")){
          setItemMenuActive(entry.target.id);
        }
        else if(entry.target.classList.contains("about")){
          setItemMenuActive(entry.target.id);
        }
        else if(entry.target.classList.contains("destination")){
          setItemMenuActive(entry.target.id);
          paint("destination", data.destination);
        }
        else if(entry.target.classList.contains("services")){
          setItemMenuActive(entry.target.id);
          paint("services", data.services);
        }
        else if(entry.target.classList.contains("gallery")){
          setItemMenuActive(entry.target.id);
          paint("gallery", data.gallery);
        }
        else if(entry.target.classList.contains("blog")){
          setItemMenuActive(entry.target.id);
          paint("blog", data.blog);
        }
      }
    })
  }

  
  const observer = new IntersectionObserver(callback, {threshold: 0.3})
  allSections.forEach(section => observer.observe(section))
}

export { dataToSite, interObserver }
