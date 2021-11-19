const inputPassword = document.querySelector(".input-password");
const toggle = document.querySelector(".toggle");

let addFlag = false;

toggle.addEventListener("click", () => {
  addFlag = !addFlag;

  if (addFlag) {
    toggle.textContent = "Hide";
  } else {
    toggle.textContent = "Show";
  }
  showHidePassword()
});


function showHidePassword() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}

inputPassword.addEventListener('keyup',()=>{
  if (inputPassword.value.length >= 10) {
    inputPassword.style.backgroundColor = "green";
  } else {
    inputPassword.style.backgroundColor = "red";
  }
})


