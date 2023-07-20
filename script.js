// hamburger menu
let menu = document.getElementById("mob-menu");
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
// console.log(menu)
openMenu.addEventListener("click", function () {
  // menu.style.transform = 'translateX(0)';
  menu.style.left = '0';
  // console.log('ok')
});
closeMenu.addEventListener("click", function () {
  menu.style.left = "-300px";
});
