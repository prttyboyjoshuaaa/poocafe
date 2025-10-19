document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("floatingBtn");
  const gradients = [
    "linear-gradient(135deg, #4f46e5, #3b82f6)",
    "linear-gradient(135deg, #10b981, #34d399)",
    "linear-gradient(135deg, #ec4899, #f472b6)",
    "linear-gradient(135deg, #f59e0b, #fbbf24)",
    "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    "linear-gradient(135deg, #ef4444, #f87171)",
  ];
  const messages = [
    "🏠 Back to Home",
    "🔙 Return",
    "⬅ Go to Index",
    "🏡 Homepage",
    "🌀 Start Over",
    "🤪 Bleee",
    "💫 Main Page"
  ];

  function moveButtonRandomly() {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  }
  function changeButtonColor() {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    btn.style.background = randomGradient;
  }
  function changeButtonText() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    btn.textContent = randomMessage;
  }
  moveButtonRandomly();
  changeButtonColor();
  changeButtonText();
  setInterval(moveButtonRandomly, 1000);
  setInterval(changeButtonColor, 1000);
  setInterval(changeButtonText, 1000);
});
