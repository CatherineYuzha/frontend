document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var modal = document.querySelector(".js-modal");
  var open = document.querySelector(".js-button");
  var close = document.querySelector(".js-modal__dialog-header-close");

  open.addEventListener("click", function() {
    modal.style.display = "block";
  });

  close.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
