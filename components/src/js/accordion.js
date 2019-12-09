document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  var accordionButton = document.querySelectorAll(".accordion__button");
  var i, j;

  for (i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener("click", function() {
      for (j = 0; j < accordionButton.length; j++) {
        accordionButton[j].classList.remove("active");
        accordionButton[j].nextElementSibling.style.maxHeight = null;
      }
      if (!this.classList.contains("active")) {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  }
});
