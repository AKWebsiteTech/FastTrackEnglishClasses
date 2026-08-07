const menu = document.getElementById("menu");
document.getElementById("on").addEventListener("click", () => {
  menu.style.display = "block";
});
document.getElementById("off").addEventListener("click", () => {
  menu.style.display = "none";
});

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});