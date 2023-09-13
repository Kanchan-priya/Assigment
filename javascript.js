const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const menuList = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.style.display='none';
  closeIcon.style.display='block';
  menuList.style.display='block';
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display='block';
  closeIcon.style.display='none';
  menuList.style.display='none';
});
