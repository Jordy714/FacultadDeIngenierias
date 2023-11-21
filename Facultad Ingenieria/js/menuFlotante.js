document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            menu.classList.add("menu-fijo");
        } else {
            menu.classList.remove("menu-fijo");
        }
    });
});