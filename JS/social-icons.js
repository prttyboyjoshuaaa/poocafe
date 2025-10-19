document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelector(".social-icons");
  const footer = document.getElementById("footer");
  if (socialIcons && footer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
            socialIcons.classList.add("hide");
          } else {
            socialIcons.classList.remove("hide");
          }
        });
      },
      {
        root: null,
        threshold: 0.9,
        rootMargin: "0px 0px -20px 0px",
      }
    );
    observer.observe(footer);
  }
});
