

// Funktion zum Wechseln zwischen Dark und Light Mode
function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
}
  
// Dark Mode-Switch Event-Listener
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", toggleDarkMode);
  