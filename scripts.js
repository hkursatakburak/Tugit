let text = document.getElementById('text');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let navbarset = document.getElementById('navbarset');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    navbarset.style.marginTop = value * -2.5 + 'px';
    hill5.style.left = value * -1.5 + 'px';
    hill4.style.left = value * 1.5 + 'px';
})

//loader
const stars = document.querySelectorAll("#star");
stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
  setTimeout(function () {
    loader.style.display = 'none';
    content.style.display = 'block';
}, 2000);
});
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});