let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let marey = document.querySelector(".marey");


window.onscroll = function () {
    let value = scrollY
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    moon.style.behavior = 'smooth';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value  + 'px';
    boat.style.top = value  + 'px';
    marey.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        marey.style.fontSize = 67 + "px";
        marey.style.position = 'fixed';
        if (scrollY >= 500) {
            marey.style.display = 'none';
        } else {
             marey.style.display = 'block';
        }
        if (scrollY >= 120) {
            document.querySelector(".main").style.background = 'linear-gradient(rgb(101 138 226), rgb(79, 55, 159))';
        } else {
            document.querySelector(".main").style.background = 'linear-gradient(rgb(32, 8, 38), rgb(79, 55, 159))'; 
        }
    }
}