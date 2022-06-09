"use strict"

import { destination, services, gallery, blog } from "./data/data.js";

//funciones que retonan data para pintar;
const getServices = () => {
  return new Promise(resolve => setTimeout(()=> resolve(JSON.parse(services)), 1000))
}

const getGallery = () => {
  return new Promise(resolve => setTimeout(() => resolve(JSON.parse(gallery)), 1000))
}

const getBlog = () => {
  return new Promise(resolve => setTimeout(() => resolve(JSON.parse(blog)), 1000));
}

const getDestination = () => {
  return new Promise(resolve => setTimeout(() => resolve(JSON.parse(destination)), 1000));
}

const allData = () => {
  return [
    getDestination(),
    getServices(),
    getGallery(),
    getBlog()
  ]
}
export { allData };