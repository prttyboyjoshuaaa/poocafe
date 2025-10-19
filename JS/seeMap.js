function toggleMap(button) {
  const content = button.nextElementSibling;
  content.style.display =
    content.style.display === "block" ? "none" : "block";
}