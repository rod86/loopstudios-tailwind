
function navToggle() {
   const btn = document.getElementById('menu-btn');
   const menu = document.getElementById('menu');

    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

window.onload = function () {
    document.getElementById('menu-btn').addEventListener('click', navToggle);
};