document.addEventListener("DOMContentLoaded", function() {
  const accordionButton = document.querySelectorAll(".accordion__button");

  for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener("click", function() {
      for (let j = 0; j < accordionButton.length; j++) {
        accordionButton[j].classList.remove("active");
        accordionButton[j].nextElementSibling.style.maxHeight = null;
      }

      if (!this.classList.contains("active")) {
        const content = this.nextElementSibling;

        this.classList.toggle("active");

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  }
});
