// LOGIN FORM VALIDATION
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username === "") {
        alert("Username cannot be empty");
        return;
    }

    if (username.length < 4) {
        alert("Username must be at least 4 characters long");
        return;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    alert("Login Successful!");
    loginForm.reset();
});


// SIGNUP FORM VALIDATION
const signupForm = document.getElementById("SignUp");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("SignUp-username").value.trim();
    const email = document.getElementById("SignUpEmail").value.trim();
    const password = document.getElementById("SignUppassword").value.trim();

    // USERNAME VALIDATION
    if (username === "") {
        alert("Username cannot be empty");
        return;
    }

    if (username.length < 4) {
        alert("Username must be at least 4 characters long");
        return;
    }

    // EMAIL VALIDATION (STRICT)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address (example: user@gmail.com)");
        return;
    }

    // PASSWORD VALIDATION (STRONG PASSWORD)
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        alert(
            "Password must contain:\n" +
            "• At least 8 characters\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );
        return;
    }

    alert("Signup Successful!");
    signupForm.reset();
});


// TOGGLE BETWEEN LOGIN AND SIGNUP
const container = document.querySelector(".container");
const signupBtn = document.querySelector(".SignUp-btn");
const loginBtn = document.querySelector(".login-btn");

signupBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// LOGIN PASSWORD TOGGLE
const loginPassword = document.getElementById("loginPassword");
const toggleLoginPassword = document.getElementById("toggleLoginPassword");

toggleLoginPassword.addEventListener("click", () => {

    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        toggleLoginPassword.classList.replace("bx-hide", "bx-show");
    } 
    else {
        loginPassword.type = "password";
        toggleLoginPassword.classList.replace("bx-show", "bx-hide");
    }

});


// SIGNUP PASSWORD TOGGLE
const signupPassword = document.getElementById("SignUppassword");
const toggleSignupPassword = document.getElementById("toggleSignupPassword");

toggleSignupPassword.addEventListener("click", () => {

    if (signupPassword.type === "password") {
        signupPassword.type = "text";
        toggleSignupPassword.classList.replace("bx-hide", "bx-show");
    } 
    else {
        signupPassword.type = "password";
        toggleSignupPassword.classList.replace("bx-show", "bx-hide");
    }

});