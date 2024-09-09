document.getElementById('fullname').addEventListener('input', () => {
    const fullname = document.getElementById('fullname');
    fullname.value = fullname.value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Email validation
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Password validation
    const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Confirm Password validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (isValid) {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        if (registeredUsers.some(user => user.email === email.value)) {
            alert('This email is already registered.');
            return;
        }

        registeredUsers.push({ fullname: fullname.value, email: email.value, password: password.value });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        displayUsers();
        document.getElementById('registerForm').reset();
    }
});

function displayUsers() {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const table = document.getElementById('table');

    // Clear existing rows
    table.innerHTML = `
        <thead>
            <tr>
                <th>Fullname</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector('tbody');

    registeredUsers.forEach(user => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = user.fullname;
        row.insertCell(1).innerText = user.email;
        row.insertCell(2).innerText = user.password;
    });
}

displayUsers();