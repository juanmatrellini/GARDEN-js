/*Login and Signup Form */

const loginForm = document.querySelector("form.login");
const signupnForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupnBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");

signupnBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupnBtn.click();
};



/*Login*/

const loginParagraph = document.getElementById("loginParagraph");
const iniciarBtn = document.getElementById("iniciarBtn");
const userLogin = document.getElementById("userLogin");
const passwordLogin = document.getElementById("passwordLogin");
const formSession = document.getElementById("formSession");





/*Sign Up*/

const signParagraph = document.getElementById("signParagraph");
const upBtn = document.getElementById("upBtn");
const usernameUp = document.getElementById("usernameUp");
const passwordUp = document.getElementById("passwordUp");
const passwordUpConfirm = document.getElementById("passwordUpConfirm");
const formUp = document.getElementById("formUp");