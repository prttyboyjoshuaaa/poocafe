document.addEventListener("DOMContentLoaded", function () {
  const authModal = document.getElementById("auth-modal");
  const overlay = document.getElementById("modal-overlay");
  const closeModal = document.getElementById("close-modal");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showLoginBtn = document.getElementById("show-login");
  const showSignupBtn = document.getElementById("show-signup");
  const openLogin = document.getElementById("nav-login");
  const openSignup = document.getElementById("nav-signup");

  function openAuthModal(showSignup = false) {
    authModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    if (showSignup) {
      loginForm.classList.remove("visible");
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
      signupForm.classList.add("visible");
      showSignupBtn.classList.add("active");
      showLoginBtn.classList.remove("active");
    } else {
      signupForm.classList.remove("visible");
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      loginForm.classList.add("visible");
      showLoginBtn.classList.add("active");
      showSignupBtn.classList.remove("active");
    }
  }
  openLogin.addEventListener("click", () => openAuthModal(false));
  openSignup.addEventListener("click", () => openAuthModal(true));
  closeModal.addEventListener("click", () => {
    authModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
  showLoginBtn.addEventListener("click", () => openAuthModal(false));
  showSignupBtn.addEventListener("click", () => openAuthModal(true));
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("referenceModal");
  const openBtn = document.getElementById("openReferences");
  const closeBtn = document.getElementById("closeModal");

  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});