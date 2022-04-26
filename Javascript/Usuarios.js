let usersList = [];

const usersData = () => {
  if (localStorage.getItem("usersList")) {
    usersList = JSON.parse(localStorage.getItem("usersList"));
  }
};




/* SIGN UP TO WEB */
formUp.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usernameUp.value.length >= 6 && passwordUp.value.length >= 6 && passwordUp.value == passwordUpConfirm.value) {
    let user = usernameUp.value;
    let password = passwordUp.value;

    usersList.push({ user, password });
    Swal.fire({
      title: "REGISTRO EXITOSO!",
      icon: "success",
      text: "Ahora puede iniciar sesión.",
      iconColor: "#87b090",
      confirmButtonColor: "#87b090",
    });
    localStorage.setItem("usersList", JSON.stringify(usersList));
  } else if (passwordUp.value.length < 6 || usernameUp.value.length < 6) {
    Swal.fire({
    title: "ERROR DE REGISTRO",
    icon: "error",
    text: "Su usuario y contraseña deben tener al menos 6 caracteres cada uno.",
    iconColor: "#87b090",
    confirmButtonColor: "#87b090",
  })} else if (passwordUp.value != passwordUpConfirm.value) {
    Swal.fire({
        title: "ERROR DE REGISTRO",
        icon: "error",
        text: "Sus contraseñas no coinciden.",
        iconColor: "#87b090",
        confirmButtonColor: "#87b090",
      })
  }
  usernameUp.value = "";
  passwordUp.value = "";
  passwordUpConfirm.value = "";
  
});

usersData();



/* LOG IN TO WEB */
let userGuest

formSession.addEventListener("submit", (e) => {
    e.preventDefault();

    let logIn = "error"

  for (let i = 0; i < usersList.length; i++) {
    if (userLogin.value == usersList[i].user &&
      passwordLogin.value == usersList[i].password) {
    
      window.location.href = "./Productos/carrito.html";
      logIn = "correct"
      userGuest = userLogin.value
      localStorage.setItem("userGuest", JSON.stringify(userGuest))
    } else {
      logIn = "error"
    }
}
    if ( logIn == "error") {
    Swal.fire({
    title: "DATOS INCORRECTOS",
    icon: "error",
    text: "Registrese o ntente nuevamente.",
    iconColor: "#87b090",
    confirmButtonColor: "#87b090",
});
    userLogin.value = "";
    passwordLogin.value = "";
}
  
});