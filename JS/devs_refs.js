document.addEventListener("DOMContentLoaded", function () {
  const devToggle = document.getElementById("devToggle");
  const devList = document.getElementById("devList");

  if (devToggle && devList) {
    devToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      devList.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!devList.contains(e.target) && e.target !== devToggle) {
        devList.classList.remove("show");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const refToggle = document.getElementById("refToggle");
  const refList = document.getElementById("refList");

  if (refToggle && refList) {
    refToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      refList.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!refList.contains(e.target) && e.target !== refToggle) {
        refList.classList.remove("show");
      }
    });
  }
});