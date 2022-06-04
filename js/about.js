"use strict"

const controlsBtn = document.querySelectorAll(".about .controls .control-btn");
const video = document.querySelector(".about .video");

const displayVideo = (srcVideo) => {
  video.setAttribute("src", srcVideo);
}


export const listenerAbout = () => {
    controlsBtn.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const dataSrc = e.target.dataset.src;
        displayVideo(dataSrc)
      })
    })
}
