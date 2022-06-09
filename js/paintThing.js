"use strict"

const destinationItem = document.getElementById("destination-item").content;
const destinationContainer = document.querySelector(".destination .box-container");
const servicesItem = document.getElementById("services-item").content;
const servicesContainer = document.querySelector(".services .box-container");
const galleryitem = document.getElementById("gallery-item").content;
const galleryContainer = document.querySelector(".gallery .box-container");
const blogItem = document.getElementById("blog-item").content;
const blogContainer = document.querySelector(".blog .box-container");
const fragment = document.createDocumentFragment();

//pinta la informacion de destination
const paintDestination = (destinations) => {
  let destinationNodes = destinations.map(destination => {
    let {id, title, parraf, image, alt, delay} = destination;
    let template = destinationItem.cloneNode(true);
    template.querySelector(".box").dataset.id = id;
    template.querySelector(".box").setAttribute("data-aos-delay", `${delay}`);
    template.querySelector(".image img").setAttribute("src", `${image}`);
    template.querySelector(".image img").setAttribute("alt", `${alt}`);
    template.querySelector(".box .content h3").textContent = title;
    template.querySelector(".box .content p").textContent = parraf;
    fragment.appendChild(template);
    return fragment;
  })
  destinationContainer.appendChild(...destinationNodes);
}

//pinta la informacion de servicios
const paintServices = (services) => {
  let servicesNodes = services.map(service => {
    let { id, title, parraf, icon, delay } = service;
    icon = icon.split(" ");
    let template = servicesItem.cloneNode(true);
    template.querySelector(".box").dataset.id = id;
    template.querySelector(".box").setAttribute("data-aos-delay", `${delay}`);
    template.querySelector(".box i").classList.add(`${icon[0]}`);
    template.querySelector(".box i").classList.add(`${icon[1]}`);
    template.querySelector(".box h3").textContent = title;
    template.querySelector(".box p").textContent = parraf;
    fragment.appendChild(template);
    return fragment
  })
  servicesContainer.appendChild(...servicesNodes);
}

//pinta la informacion de gallery
const paintGallery = (galleryItems) => {
  let galleryNodes = galleryItems.map(gItem => {
    let { id, image, country, delay} = gItem;
    let template = galleryitem.cloneNode(true);
    template.querySelector(".box").dataset.id = id;
    template.querySelector(".box").setAttribute("data-aos-delay", `${delay}`);
    template.querySelector(".box img").setAttribute("src", `${image}`);
    template.querySelector(".box img").setAttribute("alt", `${country}`);
    template.querySelector(".box h3").textContent = country;
    fragment.appendChild(template);
    return fragment;
  })
  galleryContainer.appendChild(...galleryNodes);
}

//pinta la informacion de blog
const paintBlog = (blogItems) => {
  const blogNodes = blogItems.map(item => {
    const { id, title, image, date, autor, delay } = item;
    const alt = image.substring(image.lastIndexOf("/") + 1, image.lastIndexOf("."));
    let template = blogItem.cloneNode(true);
    template.querySelector(".box").dataset.id = id;
    template.querySelector(".box").setAttribute("data-aos-delay", `${delay}`);
    template.querySelector(".box .image img").setAttribute("src", `${image}`);
    template.querySelector(".box .image img").setAttribute("alt", `${alt}`);
    template.querySelector(".box .content a").textContent = title;
    template.querySelector(".box .content .icon").children[0].querySelector("i").insertAdjacentHTML("afterend", ` ${date}`);
    template.querySelector(".box .content .icon").children[1].querySelector("i").insertAdjacentHTML("afterend", ` ${autor}`);
    fragment.appendChild(template);
    return fragment;
  })
  blogContainer.appendChild(...blogNodes);
}

//recibe informacion desde el observer para pintar la informacion
const paint = (section, data) => {
  switch(section){
    case "destination":{
      if(destinationContainer.children.length > 0) return;
      paintDestination(data);
      break;
    }
    case "services":{
      if(servicesContainer.children.length > 0) return;
      paintServices(data);
      break;
    }
    case "gallery":{
      if(galleryContainer.children.length > 0) return;
      paintGallery(data);
      break;
    }
    case "blog":{
      if(blogContainer.children.length > 0) return;
      paintBlog(data);
      break;
    }
    default: return;
  }
}

export { paint };

