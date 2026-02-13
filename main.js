let menu = document.getElementById("my-menu");
let icon = document.getElementsByClassName("menu")[0];

icon.onclick = function(e) {
    e.stopPropagation();
    menu.classList.toggle("show");
}

document.querySelectorAll('#my-menu a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove("show");
    };
});

document.onclick = function (e) {
    if (!menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("show");
    }
};