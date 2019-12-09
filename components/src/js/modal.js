document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var modal = document.querySelector(".js-modal");
  var openButton = document.querySelector(".js-button");
  var closeButton = document.querySelector(".js-close");

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
