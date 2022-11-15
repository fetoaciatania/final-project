const loginButton = document.getElementById("login-form-submit");
loginButton.onclick = checkUserLogin

function checkUserLogin () {
      console.log('test')
      const getUser = localStorage.getItem('uname')
      if (getUser) {
        // jika sudah ada yang login
        const userLogin = JSON.parse(getUser)
        // console.log(userLogin)
        const username = userLogin.username
        console.log(username, 'username yg login')
        window.location.href="./homepage.html"
      }
    }

    checkUserLogin()