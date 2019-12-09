document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector(".js-modal");
  const openButton = document.querySelector(".js-button");
  const closeButton = document.querySelector(".js-close");

  openButton.addEventListener("click", function() {
    modal.classList.toggle("modal_closed");
  });
  closeButton.addEventListener("click", function() {
    modal.classList.toggle("modal_closed");
  });
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
