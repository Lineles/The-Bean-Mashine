const testUser = {
    name: "Dominik",
    userName: "Dome",
    password: 1234,
}

/// Login ///

function login() {
    let inputUserName = document.getElementById("loginName").value
    let inputPassword = document.getElementById("loginPassword").value

    if (inputUserName === testUser.userName) {
        checkName = true;
    } else {
       let checkName = false;
    }

    if (inputPassword === testUser.password) {
        checkPassword = true;
    } else {
       let checkPassword = false;
    }
    
    if (checkName && checkPassword === true) {
    //    return location.replace("./User-page.html")
    return window.open("User-page.html")
    }

}