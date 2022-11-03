// Get the modal
var modal = document.getElementById('form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const elForm = document.getElementById('form-register')
elForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const formData = new FormData(elForm)
  const values = Object.fromEntries(formData)
  // console.log(values)
  const { username, Email, psw } = values
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

  if (!username) {
    alert(`Username can't be empty !`)
  } else if (!Email) {
    alert(`Email can't be empty !`)
  } else if (!psw) {
    alert(`Password can't be empty !`)
  } else {
    const userLogin = {
      username,
      Email,
      psw
    }
    const userLoginStr = JSON.stringify(userLogin)
    localStorage.setItem('user', userLoginStr)
  }
})

