// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    icon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    icon.className = "fas fa-moon";
    localStorage.setItem("theme", "light");
  }
});

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
  icon.className = "fas fa-sun";
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
