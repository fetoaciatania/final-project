const loginButton = document.getElementById("login-form-submit");

const elFormSignIn = document.getElementById('login-form')
elFormSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(elFormSignIn)
    const values = Object.fromEntries(formData)
    
    const { uname, psw } = values
    console.log (uname, psw, 'ini username dan password')
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