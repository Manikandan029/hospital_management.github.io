document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple front-end validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    // Example credentials for demonstration purposes
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        // Successful login logic here (e.g., redirect to dashboard.html)
        window.location.href = 'user-details.html'; // Replace with the actual filename
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
