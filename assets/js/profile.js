document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
      document.getElementById('username').textContent = user.username;
      document.getElementById('email').textContent = user.email;
    } else {
      window.location.href = 'account.html'; // Redirect to login if no session
    }
  });
  