let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let navbarset = document.getElementById('navbarset');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -2.5 + 'px';
    navbarset.style.marginTop = value * -2.5 + 'px';
    hill5.style.left = value * -1.5 + 'px';
    hill4.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})