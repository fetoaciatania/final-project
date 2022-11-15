console.log('test-register')
const url = 'https://635d2135fc2595be26538938.mockapi.io/GirlsZone/eheheh/GirlsZoneUser'
    const elForm = document.getElementById('login-form')
    elForm.addEventListener('submit', function (event) {
      event.preventDefault()
      const formData = new FormData(elForm)
      const values = Object.fromEntries(formData)
      // console.log(values)
      const { uname, psw} = values
      if (!uname) {
        alert(`Username can't be empty !`)
      } else if (!psw) {
        alert(`Password can't be empty !`)
      } else {
        const userLogin = {
          uname,
          psw
        }
        // const userLoginStr = JSON.stringify(userLogin)
        // localStorage.setItem('user', userLoginStr)
        // onGreeting(username)
        getDataUser()
          .then(data => {
            // console.log(data)
            if (data) {
              const findUser = data.find(element => element.uname === uname)
              // console.log(findUser, '<<< find user')
              if (findUser) {
                // jika sudah pernah register
                throw new Error('Username / email is exist !')  
                // membuat error yang automatis, akan masuk ke catch
              } else {
                // jika belum pernah register
                return savedDataUser(userLogin)
              }
            } else {
              // jika data dari API belum ada
              return savedDataUser(userLogin)
            }
          })
          .then(value => {
            // ketika berhasil di saved data ke API
            const dataUserString = JSON.stringify(value)
            localStorage.setItem('uname', dataUserString)
          })
          .catch(error => {
            const message = error.message || 'Failed create user'
            // console.log(error, '<<< error')
            alert(message)
          })
      }
    })

    function getDataUser () {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(value => {
            // console.log(value)
            resolve(value)
            window.location.href="./homepage.html"
          })
          .catch(error => {
            // console.log(error)
            reject(error)
          })
      })
    }

    function savedDataUser (data = {}) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(value => {
            // console.log(value)
            resolve(value)
            window.location.href="./index.html"
          })
          .catch(error => {
            // console.log(error)
            reject(error)
          })
      })
    }

function checkUserLogin () {
      const getUser = localStorage.getItem('uname')
      if (getUser) {
        // jika sudah ada yang login
        const userLogin = JSON.parse(getUser)
        // console.log(userLogin)
        const username = userLogin.uname
        console.log(username, 'username yg udah login')
        window.location.href="./homepage.html"
      }
    }

    checkUserLogin()