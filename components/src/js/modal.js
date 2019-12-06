var modal = document.getElementById("modal");
var open = document.getElementById("open_modal");
var close = document.getElementsByClassName("modal__dialog-header-close")[0];

open.onclick = function() {
  modal.style.display = "block";
};

close.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
