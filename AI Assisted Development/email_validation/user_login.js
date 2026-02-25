//make function to validate email format using regex, return boolean value indicating whether the email is valid or not
function validateEmail(email) {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//check the login form submission, validate the email and password, and display appropriate messages
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If both email and password are valid, display a success message
    alert('Login successful!');
}

// Attach the login handler to the form submission
document.getElementById('loginForm').addEventListener('submit', handleLogin);