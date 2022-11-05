const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

const elForm = document.getElementById('form-register')
elForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const formData = new FormData(elForm)
  const values = Object.fromEntries(formData)
  // console.log(values)
  const { uname, psw } = values
  console.log (Email,'ini email')
  let url = 'https://635d2135fc2595be26538938.mockapi.io/GirlsZone/eheheh/GirlsZoneUser'

fetch(url, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(values)
})
.then((response)=> response.json())
.then((value)=> {
  console.log(value)
})
.catch((error) =>{
  console.log(error)
})

  if (!uname) {
    alert(`Username/email can't be empty !`)
  } else if (!psw) {
    alert(`Password can't be empty !`)
  } else {
    const userLogin = {
      username,
      Password,
    }
    const userLoginStr = JSON.stringify(userLogin)
    localStorage.setItem('user', userLoginStr)
  }
})