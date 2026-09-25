// Check if user already picked a theme before, otherwise default to light
const savedTheme = localStorage.getItem("medease-theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

// Wait for the page to load, then find the toggle button
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  updateIcon(savedTheme, toggleBtn);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("medease-theme", next);
    updateIcon(next, toggleBtn);
  });
});

function updateIcon(theme, btn) {
  btn.textContent = theme === "light" ? "🌙" : "☀️";
}