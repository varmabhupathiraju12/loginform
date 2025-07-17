// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!email || !password) {
        document.getElementById('loginError').innerText = 'Please fill in all fields.';
        return;
    }

    // Simulate authentication (replace with actual API call)
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid email or password.');
        }
        return response.text();
    })
    .then(message => {
        alert(message);
        document.getElementById('loginError').innerText = '';
    })
    .catch(error => {
        document.getElementById('loginError').innerText = error.message;
    });
});

// Registration form submission
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Basic validation
    if (!email || !password || !confirmPassword) {
        document.getElementById('regError').innerText = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('regError').innerText = 'Passwords do not match.';
        return;
    }

    // Simulate registration (replace with actual API call)
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('User already exists.');
        }
        return response.text();
    })
    .then(message => {
        alert(message);
        document.getElementById('regError').innerText = '';
    })
    .catch(error => {
        document.getElementById('regError').innerText = error.message;
    });
});
