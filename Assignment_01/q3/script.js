function validateLogin() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    
    let usernamePattern = /^[A-Za-z0-9_]{5,15}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let valid = true;


    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMsg").innerText = "";

    if (!usernamePattern.test(username)) {
        document.getElementById("usernameError").innerText =
            "Username must be 5-15 characters (letters, numbers, underscore)";
        valid = false;
    }

    
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innercontainText =
            "Enter a valid email address";
        valid = false;
    }

    
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText =
            "Password must be at least 6 characters and contain letters & numbers";
        valid = false;
    }

    
    if (valid) {
        document.getElementById("successMsg").innerText =
            "Login Successful!";
    }

    return false;
}
