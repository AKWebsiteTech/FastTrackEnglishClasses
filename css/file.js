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

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = this;
  const success = document.getElementById("successMessage");

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      form.style.display = "none";
      success.style.display = "block";
      form.reset();
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
});