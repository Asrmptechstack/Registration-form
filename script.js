const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");

// Name Validation
function validateName() {

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required";
        nameInput.classList.add("error");
        nameInput.classList.remove("success");

        return false;

    } else {

        nameError.textContent = "";
        nameInput.classList.remove("error");
        nameInput.classList.add("success");

        return true;
    }
}

// Email Validation
function validateEmail() {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {

        emailError.textContent = "Enter a valid email";
        emailInput.classList.add("error");
        emailInput.classList.remove("success");

        return false;

    } else {

        emailError.textContent = "";
        emailInput.classList.remove("error");
        emailInput.classList.add("success");

        return true;
    }
}

// Password Validation
function validatePassword() {

    if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");

        return false;

    } else {

        passwordError.textContent = "";
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");

        return true;
    }
}

// Enable or Disable Button
function validateForm() {

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    submitBtn.disabled =
        !(isNameValid && isEmailValid && isPasswordValid);
}

// Real-Time Validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Form Submit
document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");

    this.reset();

    submitBtn.disabled = true;
});