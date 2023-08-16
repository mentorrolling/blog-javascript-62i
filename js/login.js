const userAdmin = {
  username: "Admin",
  email: "admin@admin.com",
  password: "12345678",
  avatar:
    "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_man_people_person_profile_user_icon_123377.png",
};

const logIn = (event) => {
  event.preventDefault();

  let correo = document.querySelector("#correo").value;
  let pass = document.querySelector("#pass").value;

  if (correo == userAdmin.email && pass == userAdmin.password) {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user: userAdmin.username,
        email: userAdmin.email,
        avatar: userAdmin.avatar,
      })
    );

    location.replace("/pages/admin.html");
  } else {
    alert("El correo o la contraseña no son correctos");
  }
};

// const mostrarContenido = () => {
//   console.log(document.querySelector("#correo").value);
// };

// document.querySelector("#correo").addEventListener("blur", mostrarContenido);
// document
//   .querySelector("#correo")
//   .addEventListener("focus", () => console.log("Hiciste foco 🤩"));

document.querySelector("form").addEventListener("submit", logIn);
