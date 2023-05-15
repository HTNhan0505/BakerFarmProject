let MobileNav = document.querySelector(".header__nav-menu--mobile");
let MenuMobile = document.querySelector(".js-mobile--nav");
let ul_btn = document.querySelectorAll(".moblie-nav__link");
let close_btn = document.querySelector(".mobile-nav__icon");

function DisplayModal(e) {
   MenuMobile.classList.add("openMoblie");
}
function HideModal(e) {
    MenuMobile.classList.remove("openMoblie");
}
close_btn.addEventListener('click',HideModal)
MobileNav.addEventListener('click',DisplayModal);
for(const btn of ul_btn) {
    btn.addEventListener("click",HideModal);
}