const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginFormData = new FormData(loginForm);
    console.log(loginFormData);
});
