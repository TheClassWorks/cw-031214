let h1elem = document.querySelector(".titr");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  h1elem.classList.add("alaki");
  h1elem.classList.remove("test");
  h1elem.classList.toggle("bgRed");
});
