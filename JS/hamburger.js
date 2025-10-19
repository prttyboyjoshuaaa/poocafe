document.addEventListener("DOMContentLoaded", () => {
  const devToggle = document.getElementById("devToggle");
  const devList = document.getElementById("devList");

  if (devToggle && devList) {
    devToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      devList.classList.toggle("show");
      devList.classList.toggle("hidden");
    });
    document.addEventListener("click", function (e) {
      if (!devList.contains(e.target) && e.target !== devToggle) {
        devList.classList.remove("show");
        devList.classList.add("hidden");
      }
    });
  }

  const burgerButton = document.getElementById("hamburger");
  const mainNavMenu = document.getElementById("navMenu");
  const headerAuthBtns = document.querySelector(".auth-buttons");

  if (burgerButton && mainNavMenu && headerAuthBtns) {
    burgerButton.addEventListener("click", () => {
      mainNavMenu.classList.toggle("active");
      headerAuthBtns.classList.toggle("active");
      burgerButton.classList.toggle("is-open");
    });
  }
});