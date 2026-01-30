function validateForm() {

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let age = document.getElementById("age").value.trim();

    let namePattern = /^[A-Za-z]+$/;
    let valid = true;

    
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("successMsg").innerText = "";


    if (firstName === "" || !namePattern.test(firstName)) {
        document.getElementById("firstNameError").innerText =
            "First name should contain only alphabets";
        valid = false;
    }

    
    if (lastName === "" || !namePattern.test(lastName)) {
        document.getElementById("lastNameError").innerText =
            "Last name should contain only alphabets";
        valid = false;
    }

    
    if (age === "" || age < 18 || age > 50) {
        document.getElementById("ageError").innerText =
            "Age must be between 18 and 50";
        valid = false;
    }

    
    if (valid) {
        document.getElementById("successMsg").innerText =
            "Student Registration Successful!";
        document.getElementById("studentForm").reset();
    }

    return false; 
}
