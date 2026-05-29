const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const showHideBtn = document.getElementById("shp");
const submitBtn = document.getElementById("login");
const message = document.getElementById("message");
const form = document.getElementById("form");

const showHidePass = (e) => {
  e.preventDefault();

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    showHideBtn.textContent = "Hide";
  } else {
    inputPassword.type = "password";
    showHideBtn.textContent = "Show";
  }
};

const submitHandler = (e) => {
  e.preventDefault();
  if (inputEmail.value === "" || inputPassword.value === "") {
    message.textContent = "Please fill all fields";
    inputEmail.style.borderColor = "red";
    inputPassword.style.borderColor = "red";
    return;
  }
  if (inputPassword.value.length < 8) {
    message.textContent = "Password must be at least 8 character";
    return;
  }

  message.textContent = "Login Successful...";
  form.reset();
};

showHideBtn.addEventListener("click", showHidePass);
form.addEventListener("submit", submitHandler);
