let totop = document.querySelector(".totop");

//BOM: browser object model
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 400) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});
