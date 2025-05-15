// script.js
// Placeholder for future interactive enhancements or JS-based animations.
const body = document.body;
let scrollTimeout;

window.addEventListener("scroll", () => {
  if (body.id === "index") {
    body.classList.add("show-image-bg"); // Show image background while scrolling
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      body.classList.remove("show-image-bg"); // Hide image background after scrolling stops
    }, 200); // Adjust the delay as needed
  }
});
