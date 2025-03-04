let username = document.getElementById("username");
let password = document.querySelector(".pass");
let err_msg = document.querySelector(".err");
// let password = document.getElementsByClassName("pass");
// let p=document.querySelectorAll(".pass")

// console.log(username);
// console.log(password);
// console.log(p);

function usernamevalidation(event) {
  if (username.value.length < 3 || username.value.length > 15) {
    // err_msg.style.display = "block";
    err_msg.style.visibility = "visible";
    err_msg.style.color = "red";
    err_msg.style.fontSize = "12px";
    err_msg.innerHTML = "نام کاربری مجاز نیست";
    username.setAttribute("class", "w-75 err_box");
    
    if (event.code == "Backspace") {
      usernamevalidation();
    }
  } else username.setAttribute("class", "w-75");

  setTimeout(function () {
    err_msg.style.visibility = "hidden";
  }, 2000);
}

//---------------------- show pass -----------------
let eye = document.querySelector("#cheshm");
let sts = false;
function showpass() {
  if (!sts) {
    eye.setAttribute("class", "bi bi-eye  position-absolute eye");
    password.setAttribute("type", "text");
    sts = true;
  } else {
    eye.setAttribute("class", "bi bi-eye-slash  position-absolute eye");
    password.setAttribute("type", "password");
    sts = false;
  }
}
// eye.addEventListener("click",function(){

// })

//------------------------------- onblur ------------------
password.addEventListener("blur", function () {
  console.log("خارج شدی");
});
username.addEventListener("focus", function () {
  console.log("وارد یوزنیم شدی");
});
