// Toggle between Login and Signup
const toggleAuthButton = document.getElementById('toggle-auth');
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');

toggleAuthButton.addEventListener('click', () => {
  if (loginSection.classList.contains('hidden')) {
    loginSection.classList.remove('hidden');
    signupSection.classList.add('hidden');
    toggleAuthButton.textContent = 'Create Account';
  } else {
    loginSection.classList.add('hidden');
    signupSection.classList.remove('hidden');
    toggleAuthButton.textContent = 'Login';
  }
});

// Simulated Login/Signup
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const accountDashboard = document.getElementById('account-dashboard');
const accountAuth = document.getElementById('account-auth');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  accountAuth.classList.add('hidden');
  accountDashboard.classList.remove('hidden');
  alert('Login successful!');
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  accountAuth.classList.add('hidden');
  accountDashboard.classList.remove('hidden');
  alert('Account created successfully!');
});
