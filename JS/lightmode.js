document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  if (!toggle) {
    console.warn("Dark mode toggle button not found!");
    return;
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const mode = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });
});
