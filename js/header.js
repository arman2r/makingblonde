var nystories = document.body.querySelectorAll("main")[0];
var navMenu = document.body.querySelectorAll(".menu-header")[0];
var slider = document.body.querySelectorAll(".mascara-slider")[0]
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        //console.log(window.pageYOffset / nystories.offsetTop)
        var opac = window.pageYOffset / nystories.offsetTop;
        //console.log(opac)
        navMenu.style.background = "rgba(41, 15, 38, " + opac + ")"
        slider.style.background = "rgba(41, 15, 38, " + opac + ")";
        if (window.pageYOffset > nystories.offsetTop - 80) {
            navMenu.classList.add('fixed-menu');
        } else {
            navMenu.classList.remove('fixed-menu')
        }
    }
}