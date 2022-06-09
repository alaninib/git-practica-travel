"use strict"

const controlsBtn = document.querySelectorAll(".about .controls .control-btn");
const video = document.querySelector(".about .video");

//setea el video a mostrar
const displayVideo = (srcVideo) => {
  video.setAttribute("src", srcVideo);
}


const listenerAbout = () => {
  controlsBtn.forEach(btn => {
    //configura evento click para cambiar video;
    btn.addEventListener("click", (e) => {
      const dataSrc = e.target.dataset.src;
      displayVideo(dataSrc)
    })
  })
}

export { listenerAbout };