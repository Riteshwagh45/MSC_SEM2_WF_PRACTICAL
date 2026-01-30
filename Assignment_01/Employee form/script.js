function validateForm() {

    let empNo = document.getElementById("empNo").value.trim();
    let empName = document.getElementById("empName").value.trim();
    let salary = document.getElementById("salary").value.trim();
    let dob = document.getElementById("dob").value;
    let joiningDate = document.getElementById("joiningDate").value;

    let namePattern = /^[A-Za-z ]+$/;
    let valid = true;

    // Clear all messages
    document.getElementById("empNoError").innerText = "";
    document.getElementById("empNameError").innerText = "";
    document.getElementById("salaryError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("joiningError").innerText = "";
    document.getElementById("successMsg").innerText = "";

    // Employee Number validation
    if (empNo === "") {
        document.getElementById("empNoError").innerText =
            "Employee number is required";
        valid = false;
    }

    // Employee Name validation
    if (empName === "" || !namePattern.test(empName)) {
        document.getElementById("empNameError").innerText =
            "Employee name should contain only alphabets";
        valid = false;
    }

    // Salary validation
    if (salary === "" || salary <= 0) {
        document.getElementById("salaryError").innerText =
            "Enter a valid salary";
        valid = false;
    }

    // DOB validation
    if (dob === "") {
        document.getElementById("dobError").innerText =
            "Date of Birth is required";
        valid = false;
    }

    // Joining Date validation
    if (joiningDate === "") {
        document.getElementById("joiningError").innerText =
            "Joining date is required";
        valid = false;
    }

    // DOB + 20 years validation
    if (dob !== "" && joiningDate !== "") {

        let dobDate = new Date(dob);
        let joinDate = new Date(joiningDate);

        let minJoiningDate = new Date(dobDate);
        minJoiningDate.setFullYear(minJoiningDate.getFullYear() + 20);

        if (joinDate < minJoiningDate) {
            document.getElementById("joiningError").innerText =
                "Joining date must be greater than 20 years from Date of Birth";
            valid = false;
        }
    }

    // Success
    if (valid) {
        document.getElementById("successMsg").innerText =
            "Employee Registered Successfully!";
        document.getElementById("employeeForm").reset();
    }

    return false; // Prevent page reload
}
