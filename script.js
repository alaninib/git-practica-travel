"use strict"

import { listenerAbout } from "./js/about.js";
import { allData } from "./js/getData.js"
import { dataToSite, interObserver} from "./js/observer.js"
import { listenerHeader } from "./js/header.js";

//inicializa libreria AOS
const initAos = () => {
  AOS.init({
    duration: 400,
    offset: 150,
  })
}

const main = (
  () => {
    Promise.all(allData())
    .then(data => {
      let obj = {
        destination: data[0],
        services: data[1],
        gallery: data[2],
        blog: data[3]
      }
      dataToSite(obj);
    })
    .then(() => {
      interObserver();
      listenerHeader();
      listenerAbout();
      initAos();
    })
  }
)();