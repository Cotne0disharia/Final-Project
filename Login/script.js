document.addEventListener('DOMContentLoaded', () => {
    const loginSpan = document.getElementById('login');
    const registerSpan = document.getElementById('register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginSpan.classList.add('active');
    loginForm.classList.remove('hidden');

    loginSpan.addEventListener('click', () => {
        loginSpan.classList.add('active');
        registerSpan.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerSpan.addEventListener('click', () => {
        registerSpan.classList.add('active');
        loginSpan.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
});
