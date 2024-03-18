const changementBack = document.getElementById("btnFond");
const viddefault = 'assets/viddefault';
const vid1 = 'assets/vid1.mp4';
const vid2 = 'assets/vid2.mp4';

changementBack.addEventListener("click", () => {
    const back = document.getElementById("backgroundVideo")
    const mp4 = document.getElementById("mp4video")
    back.pause();
    Math.random(mp4.setAttribute('src', vid1) || mp4.setAttribute('src', vid2));
    back.load();
})
