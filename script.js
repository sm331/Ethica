// script.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px";
  toggleButton.style.cursor = "pointer";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  function handleResize() {
    const carList = document.querySelector(".car-list");
    if (window.innerWidth <= 768) {
      carList.style.flexDirection = "column";
      carList.style.alignItems = "center";
    } else {
      carList.style.flexDirection = "row";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
