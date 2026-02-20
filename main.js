let nav = document.querySelector("header nav");
let menu = document.getElementById("my-menu");
let icon = document.querySelector(".menu");

icon.addEventListener("click", function (e) {
    menu.classList.toggle("show");
});

menu.addEventListener("click", function (e) {
    menu.classList.remove("show");
});

window.onscroll = () => {
    menu.classList.remove("show");
};

document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("show");
    };
});