const menuBtn = document.querySelector(".menu-button");
const mob = document.querySelector(".mob");
const mobile = document.getElementById('mobile');
let navItem = document.getElementsByClassName('nav-item');
//console.log(navItem.length)

let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        //menuBtn.classList.add("open");
        menuOpen = false;
    } else {
        //menuBtn.classList.remove("open");
        menuOpen = true;
    }
});
$(document).ready(function () {
    $(".menu-button").click(function () {
        $(".menu-mobile").slideToggle();
    });
    $('.menu-button-quit').click(function () {
        $('.menu-mobile').slideToggle();
    })
    $('.nav-item').click(function(){
        $('.menu-mobile').slideToggle();
    })
});